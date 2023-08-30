defmodule App.Projects.Project do
  @moduledoc """
  project resource.
  """
  # Using Ash.Resource turns this module into an Ash resource.
  use Ash.Resource,
    # Tells Ash you want this resource to store its data in Postgres.
    data_layer: AshPostgres.DataLayer,
    extensions: [AshAdmin.Resource]

  admin do
    actor?(true)
  end

  # The Postgres keyword is specific to the AshPostgres module.
  postgres do
    table "projects"
    repo App.Repo
  end

  code_interface do
    define_for App.Projects
    define :create, action: :create
    define :read_all, action: :read
    define :update, action: :update
    define :destroy, action: :destroy
    define :get_by_id, args: [:id], action: :by_id
  end

  actions do
    defaults [:create, :read, :update, :destroy]

    read :by_id do
      argument :id, :uuid, allow_nil?: false
      get? true
      filter expr(id == ^arg(:id))
    end
  end

  attributes do
    uuid_primary_key :id

    attribute :title, :string do
      allow_nil? false
    end

    attribute :subtitle, :string
    attribute :description, :string
    attribute :tags, {:array, :string}, default: []
    attribute :links, {:array, :map}, default: []
    attribute :image, :string
  end
end
