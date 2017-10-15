class ShoppingCart < ApplicationRecord
  has_many :items, dependent: :destroy
  validates_presence_of :items
  accepts_nested_attributes_for :items
end
