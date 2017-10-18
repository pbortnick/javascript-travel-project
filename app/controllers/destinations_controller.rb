class DestinationsController < ApplicationController

  before_action :set_agent, except: [:show]

  # GET /destinations
  # GET /destinations.json
  def index
    @destinations = @agent.destinations
    respond_to do |format|
      format.html {render 'index.html', :layout => false}
      format.js {render 'index.js', :layout => false}
    end
  end

  # GET /destinations/1
  # GET /destinations/1.json
  def show
    @destination = Destination.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @destination}
    end
  end
  # #
  # # GET /destinations/new
  # def new
  #   @destination = Destination.new(agent_id: params[:agent_id])
  # end

  # POST /destinations
  # POST /destinations.json
  def create
    @destination = @agent.destinations.build(destination_params)
    if @destination.save
      # Render info I need
      # comments show view
      render "destinations/details", :layout => false
    else
      render "agents/show"
    end
    # @destinations = @agent.destinations
    # @destination.save
    # render "agents/show"
  end


  # PATCH/PUT /destinations/1
  # PATCH/PUT /destinations/1.json
  # def update
  #   if @destination.update(destination_params)
  #     redirect_to destination_path
  #   else
  #     render :new, notice: 'Error in processing destination'
  #   end
  # end

  # DELETE /destinations/1
  # DELETE /destinations/1.json
  def destroy
    @destination = Destination.find(params[:id])
    @destination.destroy
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Destination was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def destination_data
    destination = Destination.find(params[:id])
    render json: DestinationSerializer.serialize(destination)
  end

  private
    #
    def set_agent
      @agent = Agent.find(params[:agent_id])
    end
    # Use callbacks to share common setup or constraints between actions.
    # def set_destination
    #   @destination = Destination.find(params[:id])
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def destination_params
      params.require(:destination).permit(:location, :price, :trip_length, :weather, :agent_id)
    end
end
