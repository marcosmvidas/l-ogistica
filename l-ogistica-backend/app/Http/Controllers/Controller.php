<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

/**
 * @OA\Swagger(
 *     basePath="",
 *     schemes={"http", "https"},
 *     host=L5_SWAGGER_CONST_HOST,
 *     @OA\Info(
 *         version="1.0.0",
 *         title="L5 Swagger API",
 *         description="L5 Swagger API description",
 *         @OA\Contact(
 *             email="your-email@domain.com"
 *         ),
 *     )
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
