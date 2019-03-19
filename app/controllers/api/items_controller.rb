class Api::ItemsController < ApplicationController
  before_action :set_menu 
  before_action :set_item, only: [:update, :destroy]

  def index
    render json: @menu.items.all 
  end

  def create 
    item = @menu.items.new(item_params)

      if item.save
        render json: item
      else 
        render json: { errors: item.errors }, status: :unprocessable_entity
      end 
    end 

    def update 
      @item.update(item_params)
      render json: @item      
    end

    def destroy 
      @item .destroy 
      render json: {message: "Item Deleted" }
    end 

    private 

    def set_menu 
      @menu = Menu.find(params[:menu_id])
    end

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name)
    end
end
