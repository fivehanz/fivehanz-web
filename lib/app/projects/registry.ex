defmodule App.Projects.Registry do
  @moduledoc """
  Registry for projects resource
  """
  use Ash.Registry,
    extensions: [
      # This extension adds helpful compile time validations
      Ash.Registry.ResourceValidations
    ]

  entries do
    entry App.Projects.Project
  end
end
