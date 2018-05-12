require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #new" do
    it "renders the new template" do
      get :new, {}
      expect(response).to render_template("new")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of users id and password" do
        post :create, params: { user: { email: "", password: ""}}
        expect(flash[:errors].length).to be 2
      end

      it "validates that the password is at least 6 characters long" do
        post :create, params: { user: { email: "sky", password: "1234"}}
        expect(flash[:errors].length).to be 1
      end
    end

    context "with valid params" do
      it "will not throw error for correct email and password" do
        post :create, params: { user: { email: "sky", password: "123456"}}
        expect(flash[:errors]).to be nil
      end
      it "redirects user to bands index on success" do
        post :create, params: { user: { email: "sky", password: "123456"}}
        expect(response).to redirect_to(new_session_url)
      end
    end
  end
end
