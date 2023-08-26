defmodule App.Users.User do
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication]

  postgres do
    table "users"
    repo App.Repo
  end

  attributes do
    uuid_primary_key :id
    attribute :email, :ci_string, allow_nil?: false
    attribute :hashed_password, :string, allow_nil?: false, sensitive?: true
  end

  authentication do
    api App.Users

    strategies do
      password :password do
        identity_field(:email)
        sign_in_tokens_enabled?(true)
      end
    end

    tokens do
      enabled?(true)
      token_resource(App.Users.Token)
      signing_secret(App.Users.Secrets)
    end
  end

  identities do
    identity :unique_email, [:email]
  end
end
