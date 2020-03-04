class User < ApplicationRecord
  # has_secure_password
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true

  validates :password, length: {minimum: 8, allow_nil: true}
  validate :validateEmail
  attr_reader :password
  
  before_validation :ensure_session_token

  has_one_attached :image
  has_many :reviews
  has_many :follows

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

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email_or_username, password)
    user = User.find_by_username(email_or_username)
    user = User.find_by(email: email_or_username) unless user
    return nil unless user
    return nil unless BCrypt::Password.new(user.password_digest) == password
    return user
  end
  private
  def validateEmail
    unless /^[A-Z0-9'.1234z_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i =~ email
      errors.add(:email, "Email must be valid")
    end
  end
end
