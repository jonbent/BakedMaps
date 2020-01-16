class Follow < ApplicationRecord
    validates :user_id, :bakery_tag, :bakery_type, presence: :true
    validates :user_id, uniqueness: {scope: [:bakery_tag, :bakery_type]}
    
    belongs_to :user
    
end
