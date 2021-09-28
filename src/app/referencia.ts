export interface Referencias {
    id: string;
    titulo: string;
    link: string;
    tag: string;
    preview: Preview;
}

export interface Preview {
    titulo: string;
    description: string;
    image: string;
    url: string;
}

export interface NovaReferencia{
    titulo: string;
    link: string;
    tag: string;
}
