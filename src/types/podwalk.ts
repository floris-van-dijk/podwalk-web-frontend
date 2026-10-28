// Base interfaces
export interface Location {
  lat: number;
  lng: number;
}

export interface Route {
  id: number;
  application_id: number;
  name: string;
  description: string;
  place: string;
  lat: number;
  lng: number;
  order: number;
  published: number;
  created_at: string;
  updated_at: string;
}

export interface Bounds {
  lat_min: number;
  lng_min: number;
  lat_max: number;
  lng_max: number;
  lat_center: number;
  lng_center: number;
  length: {
    km: number;
    minutes: number;
  };
}

export interface CoverImage {
  file: {
    id: number;
    url: string;
    size: number;
    mime_type: string;
  };
  focus_point: {
    x: number;
    y: number;
  };
  alt: string;
}

export interface RouteDetailsType {
  id: number;
  name: string;
  data_schema: string; // JSON schema as string
  created_at: string;
  updated_at: string;
}

// Accessibility specific types
export interface AccessibilityCategory {
  type: 'wheelchair' | 'dog';
  description: string;
  is_accessible: boolean;
}

export interface AccessibilityData {
  categories: AccessibilityCategory[];
  description: string;
}

// Completion specific types
export interface CompletionAction {
  text: string;
  url: string;
}

export interface CompletionData {
  actions: CompletionAction[];
}

// Description specific types
export interface DescriptionData {
  text: string;
}

// Equipment specific types
export type EquipmentItem = 'hiking_boots' | 'powerbank' | 'binoculars';

export interface EquipmentData {
  items: EquipmentItem[];
  description: string;
}

// Setting specific types
export type SettingCategory = 'city' | 'nature';

export interface SettingData {
  categories: SettingCategory[];
  description: string;
}

// Transport specific types
export type TransportType =
  | 'bus'
  | 'train'
  | 'tram'
  | 'metro'
  | 'ferry'
  | 'bicycle'
  | 'car';

export interface Distance {
  meters: number;
  minutes: number;
}

export interface TransportOption {
  type: TransportType;
  location: Location;
  name: string;
  distance: Distance;
  url: string; // geo: protocol URL
}

export interface StartLocation {
  url: string; // geo: protocol URL
  info: string;
  address: string;
  location: Location;
}

export interface TransportData {
  options: TransportOption[];
  description: string;
  start_location: StartLocation;
}

// Union type for all possible data types
export type RouteDetailData =
  | AccessibilityData
  | CompletionData
  | DescriptionData
  | EquipmentData
  | SettingData
  | TransportData;

// Main route detail interface
export interface RouteDetail {
  id: number;
  route_id: number;
  route_detail_type_id: number;
  imgUrl: string;
  data: RouteDetailData;
  order: number;
  published: number;
  created_at: string;
  updated_at: string;
  route: Route;
  type:
    | 'accessibility'
    | 'completion'
    | 'description'
    | 'equipment'
    | 'setting'
    | 'transport';
  route_details_type: RouteDetailsType;
}

// Typed route detail interfaces for specific types
export interface AccessibilityRouteDetail
  extends Omit<RouteDetail, 'data' | 'type'> {
  data: AccessibilityData;
  type: 'accessibility';
}

export interface CompletionRouteDetail
  extends Omit<RouteDetail, 'data' | 'type'> {
  data: CompletionData;
  type: 'completion';
}

export interface DescriptionRouteDetail
  extends Omit<RouteDetail, 'data' | 'type'> {
  data: DescriptionData;
  type: 'description';
}

export interface EquipmentRouteDetail
  extends Omit<RouteDetail, 'data' | 'type'> {
  data: EquipmentData;
  type: 'equipment';
}

export interface SettingRouteDetail extends Omit<RouteDetail, 'data' | 'type'> {
  data: SettingData;
  type: 'setting';
}

export interface TransportRouteDetail
  extends Omit<RouteDetail, 'data' | 'type'> {
  data: TransportData;
  type: 'transport';
}

// Update or add these interfaces
export interface PodwalkDetails {
  completion: {
    id: number;
    data: {
      actions: any[];
    };
    updated_at: string;
    type: 'completion';
  };
  description: {
    id: number;
    data: {
      text: string;
    };
    updated_at: string;
    type: 'description';
  };
  setting: {
    id: number;
    data: {
      categories: string[];
      description: string;
    };
    updated_at: string;
    type: 'setting';
  };
  accessibility: {
    id: number;
    data: {
      categories: {
        type: 'wheelchair' | 'dog';
        description: string;
        is_accessible: boolean;
      }[];
      description: string;
    };
    updated_at: string;
    type: 'accessibility';
  };
  transport: {
    id: number;
    data: {
      options: any[];
      description: string;
      start_location: {
        url: string;
        info: string;
        address: string;
        location: {
          lat: number;
          lng: number;
        };
      };
    };
    updated_at: string;
    type: 'transport';
  };
  equipment: {
    id: number;
    data: {
      items: string[];
      description: string;
    };
    updated_at: string;
    type: 'equipment';
  };
  external_references: null;
}

// Update the Podwalk interface
export interface Podwalk extends Route {
  details?: RouteDetail[];
  bounds?: Bounds;
  cover_image?: CoverImage;
}

// API Response types
export interface PodwalkApiResponse {
  route: Route;
  details: RouteDetail[];
}

// Helper type guards
export const isAccessibilityDetail = (
  detail: RouteDetail
): detail is AccessibilityRouteDetail => detail.type === 'accessibility';

export const isCompletionDetail = (
  detail: RouteDetail
): detail is CompletionRouteDetail => detail.type === 'completion';

export const isDescriptionDetail = (
  detail: RouteDetail
): detail is DescriptionRouteDetail => detail.type === 'description';

export const isEquipmentDetail = (
  detail: RouteDetail
): detail is EquipmentRouteDetail => detail.type === 'equipment';

export const isSettingDetail = (
  detail: RouteDetail
): detail is SettingRouteDetail => detail.type === 'setting';

export const isTransportDetail = (
  detail: RouteDetail
): detail is TransportRouteDetail => detail.type === 'transport';

// Request types for creating/updating
export interface CreateRouteRequest {
  name: string;
  description: string;
  place: string;
  lat: number;
  lng: number;
  application_id: number;
}

export interface UpdateRouteRequest extends Partial<CreateRouteRequest> {
  id: number;
}

export interface CreateRouteDetailRequest {
  route_id: number;
  route_detail_type_id: number;
  data: RouteDetailData;
  order?: number;
  published?: number;
}

export interface UpdateRouteDetailRequest
  extends Partial<CreateRouteDetailRequest> {
  id: number;
}
