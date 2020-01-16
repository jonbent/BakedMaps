class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.bigint :user_id, null: false
      t.string :favoritable_type, null: false
      t.string :favoritable_id, null: false
      t.string :bakery_slug, null: false

      t.timestamps
    end
    add_index :favorites, [:user_id, :favoritable_type, :favoritable_id], unique: true, name: :unique_favorite
  end
end
