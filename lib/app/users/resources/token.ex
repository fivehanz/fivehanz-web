defmodule App.Users.Token do
  @moduledoc """
  Token resource
  """
  use Ash.Resource,
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAuthentication.TokenResource]

  token do
    api App.Users
  end

  postgres do
    table "tokens"
    repo App.Repo
  end
end