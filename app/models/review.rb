class Review < ApplicationRecord
    validates :title, :body, :rating, :reviewable_type, :reviewable_id, presence: true
    validates :title, uniqueness: {scope: [:reviewable_type, :reviewable_id]}
end
