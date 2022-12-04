class CreateTourists < ActiveRecord::Migration[7.0]
  def change
    create_table :Tourists do |t|
      t.string :username
      t.string :user_type
      t.integer :phone
      t.string :email
      t.string :password
      t.timestamps
    end
  end
end
