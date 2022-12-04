class Site < ApplicationRecord
    belongs_to :tourguide
    has_many :site
    has_many :tourist, through: :book
    validates :price, presence: true
    validates :title, presence: true
end
