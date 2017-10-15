require "rails_helper"

RSpec.describe ShoppingCart, :type => :model do
  it "creates a valid model" do
    item = Item.new(quantity: 1, name: 'Test')
    cart = ShoppingCart.new(items: [item])
    expect(cart).to be_valid 
  end

  it "is invalid without at least one item" do
    cart = ShoppingCart.new
    cart.valid?
    expect(cart.errors[:items]).to include("can't be blank")
  end
end