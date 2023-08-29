defmodule App.Users.Registry do
  @moduledoc """
  Registry for users resource
  """
  use Ash.Registry,
    extensions: [
      Ash.Registry.ResourceValidations
    ]

  entries do
    entry App.Users.User
    entry App.Users.Token
  end
end
