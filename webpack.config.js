/**
 * Created by slashhuang on 16/9/30.
 */

module.exports={
    loaders: [

        /*
         * Typescript loader support for .ts and Angular 2 async routes via .async.ts
         *
         * See: https://github.com/s-panferov/awesome-typescript-loader
         */
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            exclude: [/\.(spec|e2e)\.ts$/]
        },
        ]
}