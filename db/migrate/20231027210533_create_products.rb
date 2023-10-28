class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :description
      t.string :image
      t.decimal :price
      t.string :category

      t.timestamps
    end
  end
end
