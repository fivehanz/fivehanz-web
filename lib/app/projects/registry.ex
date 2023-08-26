defmodule App.Projects.Registry do
  use Ash.Registry,
    extensions: [
      # This extension adds helpful compile time validations
      Ash.Registry.ResourceValidations
    ]

  entries do
    entry App.Projects.Project
  end
end
