module AIMC.Baltic.Shared.Enums {
	export const enum Direction {
		None = 0,
		Proactive = 1,
		Reactive = 2
	}
	export const enum DistributionStatus {
		Draft = 1,
		Scheduled = 2,
		Processing = 3,
		Failed = 4,
		Processed = 5
	}
	export const enum DistributionType {
		Email = 1,
		Canvas = 2,
		Realwire = 3,
		Omc = 4
	}
	export const enum FacetedSearchEntityType {
		None = 0,
		Contact = 1,
		Outlet = 2,
		EdCal = 4,
		GroupEntity = 8,
		Release = 16,
		PoliticalContact = 32,
		Interaction = 64
	}
	export const enum FacetedSearchFilterType {
		StringFilter = 1,
		IdFilter = 2,
		NumberFilter = 3,
		DateFilter = 4,
		EnumFilter = 5
	}
	export const enum FacetedSearchNumberOperator {
		GreaterThanOrEqualTo = 1,
		LessThanOrEqualTo = 2
	}
	export const enum GreetingFormat {
		None = 0,
		First = 1,
		FirstLast = 2,
		SalutationLast = 3,
		SalutationFirstLast = 4
	}
	export const enum GroupEntityType {
		None = 0,
		Contact = 1,
		Outlet = 2,
		EdCal = 3,
		Group = 4
	}
	export const enum KeyValueStoreLevel {
		User = 2,
		Client = 3
	}
	export const enum RecordType {
		Contact = 1,
		Outlet = 2,
		EdCal = 3,
		Group = 4,
		Release = 5,
		Interaction = 6
	}
	export const enum RestrictedVisibility {
		None = 0,
		Client = 1,
		User = 2,
		UserGroup = 3
	}
	export const enum SortOrder {
		Ascending = 1,
		Descending = 2
	}
	export const enum Status {
		Active = 1,
		Inactive = 2,
		Suspended = 3,
		InReview = 4
	}
}

