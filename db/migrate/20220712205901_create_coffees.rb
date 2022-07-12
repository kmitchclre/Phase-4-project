class CreateCoffees < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.string :type

      t.timestamps
    end
  end
end
