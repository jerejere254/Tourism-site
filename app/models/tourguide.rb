class Tourguide < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    has_many :site
end
