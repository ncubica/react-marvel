class Item < ApplicationRecord
  belongs_to :shopping_cart, optional: true
  validates_presence_of :quantity, :name
  validates :name, uniqueness: { scope: :shopping_cart }
end
