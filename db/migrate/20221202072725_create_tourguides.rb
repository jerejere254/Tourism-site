class CreateTourguides < ActiveRecord::Migration[7.0]
  def change
    create_table :tourguides do |t|
       t.string :username
       t.string :user_type
      t.integer :phone
      t.string :email
      t.string :address
      t.string :bio
      t.string :image_url
      t.string :password_digest
      t.timestamps
    end
  end
end
