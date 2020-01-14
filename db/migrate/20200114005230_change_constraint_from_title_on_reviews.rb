class ChangeConstraintFromTitleOnReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, name: :index_reviews_on_reviewable_type_and_reviewable_id_and_title
    add_index :reviews, [:title, :reviewable_type, :reviewable_id, :user_id], unique: true, name: "unique_review_title_for_user_and_type"
  end
end
