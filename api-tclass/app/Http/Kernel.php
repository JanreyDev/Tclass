<?php

namespace App\Http;

use Illuminate\Contracts\Http\Kernel as KernelContract;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Kernel implements KernelContract
{
    public function handle($request)
    {
        return new Response('Laravel kernel not fully installed.', 200);
    }

    public function terminate($request, $response)
    {
        // No-op for skeleton.
    }
}
