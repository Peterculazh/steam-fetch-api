export interface IGameWrapper {
    [key: string]: IGameDetails;
}

export interface IGameDetails {
    success: boolean;
    data?: IGameData;
}

export interface IGameData {
    type: string;
    name: string;
    steam_appid: number;
    required_age: number;
    is_free: boolean;
    controller_support: "string",
    dlc: number[];
    detailed_description: string;
    about_the_game: string;
    short_description: string;
    supported_languages: string;
    header_image: string;
    website: string;
    pc_requirements?: {
        minimum?: string;
        recommended?: string;
    }
    mac_requirements: any[],
    linux_requirements: any[],
    legal_notice: string;
    developers: string[];
    publishers: string[];
    price_overview: IGamePriceOverview,
    packages: number[];
    package_groups: IPackageGroups[];
    platforms: IPlatforms;
    metacritic: IMetacritic;
    categories: ICategories[];
    genres: IGenres[];
    screenshots: IScreenshots[];
    movies: IMovies[];
    recommendations: {
        total: number;
    }
    achievements: IAchievements;
    release_date: {
        coming_soon: boolean;
        date: string;
    }
    support_info: {
        url: string;
        email: string;
    }
    background: string;
    content_descriptors: {
        ids: number[];
        notes: string;
    }
}

export interface IGamePriceOverview {
    currency: string;
    initial: string;
    final: string;
    discount_percent: string;
    initial_formatted: string;
    final_formatted: string;
}

export interface IPackageGroups {
    name: string;
    title: string;
    description: string;
    selection_text: string;
    save_text: string;
    display_type: string;
    is_recurring_subscription: string;
    subs: IPackageGroupsSubs[];
}

export interface IPackageGroupsSubs {
    packageid: number;
    percent_savings_text: string;
    percent_savings: number;
    option_text: string;
    option_description: string;
    can_get_free_license: string;
    is_free_license: boolean;
    price_in_cents_with_discount: string;
}

export interface IPlatforms {
    [key: string]: boolean;
}

export interface IMetacritic {
    score: number;
    url: string;
}

export interface ICategories {
    id: number;
    description: string;
}

export interface IGenres {
    id: string;
    description: string;
}


export interface IScreenshots {
    id: number;
    path_thumbnail: string;
    path_full: string;
}

export interface IMovies {
    id: number;
    name: string;
    thumbnail: string;
    webm: {
        "480": string; // TODO: [STEAM-1] 1 check is string type or number once parsed from JSON 
        max: string;
    }
    mp4: {
        "480": string;
        max: string;
    },
    highlight: false;
}


export interface IAchievements {
    total: number;
    highlighted: IAchievement[];
}

export interface IAchievement {
    name: string;
    path: string;
}
