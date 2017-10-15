class ShoppingCartsController < ApplicationController
  before_action :set_shopping_cart, only: [:show, :edit, :update, :destroy, :remove_items]
  wrap_parameters :shopping_cart, include: [:items]
  # GET /shopping_carts
  # GET /shopping_carts.json
  def index
    @shopping_carts = ShoppingCart.all
  end

  # GET /shopping_carts/1
  # GET /shopping_carts/1.json
  def show
  end

  # GET /shopping_carts/new
  def new
    @shopping_cart = ShoppingCart.new
  end

  # GET /shopping_carts/1/edit
  def edit
  end

  # POST /shopping_carts
  # POST /shopping_carts.json
  def create
    items = shopping_cart_params[:items].map do |item| 
      Item.new(item)
    end
    @shopping_cart = ShoppingCart.new({ items: items })

    respond_to do |format|
      if @shopping_cart.save
        format.html { redirect_to @shopping_cart, notice: 'Shopping cart was successfully created.' }
        format.json { render :show, status: :created, location: @shopping_cart }
      else
        format.html { render :new }
        format.json { render json: @shopping_cart.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shopping_carts/1
  # PATCH/PUT /shopping_carts/1.json
  def update
    shopping_cart_params[:items].each do |item| 
      existing_item = @shopping_cart.items.find_by(name: item[:name])
      if existing_item
        @shopping_cart.items_attributes = [{id: existing_item[:id], quantity: item[:quantity]}]
      else
        @shopping_cart.items.push(Item.create(item))
      end
    end
    if @shopping_cart.save
      render json: @shopping_cart, status: :ok
    else
      render json: @shopping_cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shopping_carts/1
  # DELETE /shopping_carts/1.json
  def destroy
    @shopping_cart.destroy
    respond_to do |format|
      format.html { redirect_to shopping_carts_url, notice: 'Shopping cart was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def remove_items
    ids_to_remove = shopping_cart_params[:items].map { |item| item[:id] }
    if @shopping_cart.items.length > ids_to_remove.length
      render json: @shopping_cart.items.where({ id: ids_to_remove }).destroy_all
    else
      render json: @shopping_cart.destroy!
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shopping_cart
      @shopping_cart = ShoppingCart.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shopping_cart_params
      params.require(:shopping_cart).permit(
        :items => [:name, :quantity, :id]
    )
    end
end
