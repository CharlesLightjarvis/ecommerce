<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::with('scategories')->get()->toArray();
        return($articles);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $article = new Article([
            'designation' => $request->input('designation'),
            'marque' => $request->input('marque'),
            'reference' => $request->input('reference'),
            'qtestock' => $request->input('qtestock'),
            'prix' => $request->input('prix'),
            'imageart' => $request->input('imageart'),
            'scategorieID' => $request->input('scategorieID')
            ]);
            $article->save();
return response()->json('Article créé !');

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article= Article::find($id);
        return response()->json($article);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $article = Article::find($id);
        $article->update($request->all());
        return response()->json('Article MAJ !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Article::find($id);
        $article->delete();
        return response()->json('Article supprimé !');
    }
}
