class User < ApplicationRecord
  # has_secure_password
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true

  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password
  before_validation :ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    return self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    return self
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    return nil unless BCrypt::Password.new(user.password_digest) == password
    return user
  end
end
