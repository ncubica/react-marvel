require "rails_helper"

RSpec.describe Item, :type => :model do
  it "creates a valid model" do
    item = Item.new(quantity: 1, name: 'Test')
    expect(item).to be_valid 
  end

  it "is invalid without a quantity" do
    item = Item.new(quantity: nil)
    item.valid?
    expect(item.errors[:quantity]).to include("can't be blank")
  end

  it "is invalid without a name" do
    item = Item.new(name: nil)
    item.valid?
    expect(item.errors[:name]).to include("can't be blank")
  end

   it "is invalid if name is not unique within shopping cart" do
    item = Item.new(quantity: 1, name: 'Test')
    item2 = Item.new(quantity: 1, name: 'Test')
    cart = ShoppingCart.create(items: [item, item2])
    item2.valid?
    expect(item2.errors[:name]).to include("has already been taken")
  end
end