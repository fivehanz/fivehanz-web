defmodule App.Users.Registry do
  use Ash.Registry,
    extensions: [
      Ash.Registry.ResourceValidations
    ]

  entries do
    entry App.Users.User
    entry App.Users.Token
  end
end
