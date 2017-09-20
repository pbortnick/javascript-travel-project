class DestinationsController < ApplicationController
  before_action :set_destination, only: [:show, :edit, :update, :destroy]

  # GET /destinations
  # GET /destinations.json
  def index
    @agent = Agent.find(params[:agent_id])
    @destinations = @agent.destinations
    render :layout => false
  end

  # GET /destinations/1
  # GET /destinations/1.json
  def show
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @destination}
    end
  end

  # GET /destinations/new
  def new
    @destination = Destination.new(agent_id: params[:agent_id])
  end

  # GET /destinations/1/edit
  def edit
  end

  # POST /destinations
  # POST /destinations.json
  def create
    @destination = Destinations.build(destination_params)
    if @destination.valid?
      @destination.save
      render 'destinations/show', layout: false
    else
      render 'agents/show
    end
  end

  # PATCH/PUT /destinations/1
  # PATCH/PUT /destinations/1.json
  def update
    if @destination.update(destination_params)
      redirect_to destination_path
    else
      render :new, notice: 'Error in processing destination'
    end
  end

  # DELETE /destinations/1
  # DELETE /destinations/1.json
  def destroy
    @destination.destroy
    respond_to do |format|
      format.html { redirect_to destinations_url, notice: 'Destination was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_destination
      @destination = Destination.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def destination_params
      params.require(:destination).permit(:location, :price, :trip_length, :weather, :agent_id)
    end
end
