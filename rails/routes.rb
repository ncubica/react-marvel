Rails.application.routes.draw do
  resources :shopping_carts
  delete    '/remove_items', controller: 'shopping_carts', action: 'remove_items'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
