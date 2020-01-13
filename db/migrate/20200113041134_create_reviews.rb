class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false, max: 5
      t.string :reviewable_type, null: false
      t.bigint :reviewable_id, null: false

      t.timestamps
    end
    add_index :reviews, :reviewable_type
    add_index :reviews, :reviewable_id
    add_index :reviews, [:reviewable_type, :reviewable_id, :title], unique: true
  end
end
