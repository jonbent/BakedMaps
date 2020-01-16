class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.bigint :user_id, null: false
      t.string :bakery_tag, null: false
      t.string :bakery_type, null: false

      t.timestamps
    end
    add_index :follows, [:user_id, :bakery_tag, :bakery_type], unique: true, name: :unique_follow

  end
end
