class Review < ApplicationRecord
    validates :title, :body, :rating, :reviewable_type, :reviewable_id, presence: true
    validates :title, uniqueness: {scope: [:reviewable_type, :reviewable_id, :user_id]}
    validates :rating, numericality: { less_than: 6, greater_than: 0}
    belongs_to :user
end
