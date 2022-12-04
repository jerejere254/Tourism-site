class Tourist < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true

    has_many :book
    has_many :products, through: :book
end
