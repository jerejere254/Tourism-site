class CreateSites < ActiveRecord::Migration[7.0]
  def change
    create_table :sites do |t|
      t.string :title
      t.string :description
      t.integer :price
      t.string :image_url
      t.integer :remaining
      t.string :tourguide_id

      t.timestamps
    end
  end
end
