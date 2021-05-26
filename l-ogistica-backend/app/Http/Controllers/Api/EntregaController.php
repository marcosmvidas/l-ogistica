<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Entrega;

/**
 * @AO\Schema()
 */

class EntregaController extends Controller
{
    /**
     *  @OA\Get(
     *      tags={"Entrega"},
     *      summary="Returns a list of courses",
     *      description="Returns a object of courses",
     *      path="/api/entregas/",
     *      @OA\Response(
     *          response="200", 
     *          description="A list with courses"
     *      ),
     *  )
     *  @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Entrega::all();
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     *  @OA\Post(
     *      tags={"Entrega"},
     *      summary="Cadastro de Rotas de entregas",
     *      description="Create",
     *      path="/api/entregas/",
     *     
     *      @OA\RequestBody(
     *          required=true, 
     *          description="Create rota de entrega",
     *          @OA\JsonContent(
     *              @OA\Property(property="cliente", type="string", format="string", example="Carlos Cardoso de Carvalho"),
     *              @OA\Property(property="dta_entrega", type="string", format="string", example="2021-04-23"),
     *              @OA\Property(property="end_destino", type="string", format="string", example="Av Santa Cruz, 12.566 Qd 8 Lt 56 casa 02"),
     *              @OA\Property(property="end_origem", type="string", format="string", example="Rua alguma rua da Pavuna, s/n"),
     *              @OA\Property(property="lat_origem", type="string", format="string", example="-27.999001"),
     *              @OA\Property(property="lng_origem", type="string", format="string", example="-17.999002"),
     *              @OA\Property(property="lat_destino", type="string", format="string", example="-47.999003"),
     *              @OA\Property(property="lng_destino", type="string", format="string", example="-07.999004"),
     *          ),
     *      ),
     *      @OA\Response(response=200, description="OK"),
     *      @OA\Response(response=500, description="Erro interno do Servidor!"),	
     *  )
     *  
     * @return \Illuminate\Http\Response
     * 
     */
    public function store(Request $request)
    {
        Entrega::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Entrega::findOrFail($id);        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $entrega = Entrega::findOrFail($id);
        $entrega->update($request->all());
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $entrega = Entrega::findOrFail($id);
        $entrega->delete();
    }
}
