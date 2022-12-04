class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.integer :site_id
      t.integer :tourists_id

      t.timestamps
    end
  end
end
