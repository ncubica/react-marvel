class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.references :shopping_cart, foreign_key: true
      t.integer :quantity, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
