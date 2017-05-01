 
 


 

/// <reference path="Enums.ts" />

declare module AIMC.Baltic.Dto {
	interface RestrictedVisibilityDtoRootBase {
		created: Date;
		createdUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
		modified: Date;
		modifiedUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
		visibilityClientId: number;
		visibilityUserGroupIds: number[];
		visibilityUserGroupIdsDelimited: string;
		visibilityUserId: number;
		//MANUALLY ADDED - WILL NEED TO BE PART OF THE MAIN THING!!!
		deleted: boolean;
	}
}
declare module AIMC.Baltic.Dto.Dms {
	interface DmsDirectoryRenameDto {
		fullSourceKey: string;
		newDirectoryName: string;
	}
	interface DmsListItemDto {
		created: Date;
		description: string;
		fileName: string;
		height: number;
		lastModified: Date;
		printReady: boolean;
		publicUrl: string;
		size: number;
		sourceKey: string;
		tags: string;
		thumbnailUrl: string;
		title: string;
		useThumbnailOnPreview: boolean;
		webVersionUrl: string;
		width: number;
	}
	interface DocFromClientDto {
		base64Data: string;
		description: string;
		fileName: string;
		folderPath: string;
		size: number;
		tags: string;
		title: string;
	}
}
declare module AIMC.Baltic.Dto.Faceted {
	interface FacetedSearchChildNodeInformationDto {
		filterKey: string;
		ids: number[];
		serviceName: string;
	}
	interface FacetedSearchDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		deleted: boolean;
		editable: boolean;
		entityType: AIMC.Baltic.Shared.Enums.FacetedSearchEntityType;
		filters: AIMC.Baltic.Dto.Faceted.FacetedSearchFilterDto[];
		groupId: number;
		name: string;
		queryType: string;
		scoringProfile: string;
		searchFields: string;
		searchMode: string;
		searchText: string;
	}
	interface FacetedSearchFilterDefinitionDto {
		canChangeOperator: boolean;
		defaultOperator: number;
		filterHierarchicalSearch: boolean;
		filterKey: string;
		filterType: AIMC.Baltic.Shared.Enums.FacetedSearchFilterType;
		filterUseTextSearch: boolean;
		listableItemsServiceName: string;
		name: string;
		order: number;
	}
	interface FacetedSearchFilterDto {
		deleted: boolean;
		enabled: boolean;
		facetedSearchId: number;
		filterKey: string;
		id: number;
		ids: AIMC.Baltic.Dto.Faceted.FacetedSearchFilterIdsDto[];
		op: number;
		value: string;
	}
	interface FacetedSearchFilterIdsDto {
		deleted: boolean;
		id: number;
		name: string;
		parentId: number;
		valueId: number;
	}
	interface FacetedSearchResultFilterDto {
		filterKey: string;
		filters: AIMC.Baltic.Dto.Faceted.FacetedSearchResultFilterListItemDto[];
		id: number;
		name: string;
	}
	interface FacetedSearchResultFilterListItemDto extends AIMC.Baltic.Dto.MediaDatabase.ListItemDto {
		checked: boolean;
		count: number;
	}
	interface FacetedTreeViewItemDto {
		checkable: boolean;
		checked: boolean;
		hasChildren: boolean;
		id: number;
		text: string;
	}
}
declare module AIMC.Baltic.Dto.Kendo {
	interface CategoryKendoDto {
		deleted: boolean;
		description: string;
		entries: number;
		id: number;
		name: string;
	}
	interface ClientKendoDto {
		dataArea_Id: number;
		dataArea_Name: string;
		deleted: boolean;
		id: number;
		name: string;
		sourceKey: string;
		users: number;
		vuelioSuffix: string;
	}
	interface ContactKendoAzDto {
		addressLine1: string;
		addressLine2: string;
		avatarUrl: string;
		city: string;
		contactTypeName: string;
		countryName: string;
		county: string;
		email: string;
		facebookUrl: string;
		focusName: string;
		googlePlusUrl: string;
		homepage: string;
		id: number;
		instagramUrl: string;
		jobTitle: string;
		linkedInUrl: string;
		mediaTypeName: string;
		name: string;
		outletAvatarUrl: string;
		outletEmail: string;
		outletHomepage: string;
		outletId: number;
		outletName: string;
		outletPhone: string;
		outletSortName: string;
		outletTopicNames: string[];
		outletTwitterHandle: string;
		outletTwitterUrl: string;
		phone: string;
		pinterestUrl: string;
		postalCode: string;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		sortName: string;
		topicNames: string[];
		twitterHandle: string;
		twitterUrl: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
		vuelioInfluencerRating: number;
		youTubeUrl: string;
	}
	interface ContactKendoDto {
		address_City: string;
		address_Country_Name: string;
		address_County: string;
		address_Line1: string;
		address_Line2: string;
		address_PostalCode: string;
		communication_AvatarUrl: string;
		communication_EmailAddress: string;
		communication_FacebookUrl: string;
		communication_GooglePlusUrl: string;
		communication_InstagramUrl: string;
		communication_LinkedInUrl: string;
		communication_MainHomepage: string;
		communication_PhoneNumber: string;
		communication_PinterestUrl: string;
		communication_TwitterHandle: string;
		communication_TwitterUrl: string;
		communication_YouTubeUrl: string;
		deleted: boolean;
		desk_Id: number;
		desk_Name: string;
		displayName: string;
		id: number;
		name: string;
		outlet_Communication_AvatarUrl: string;
		outlet_Communication_EmailAddress: string;
		outlet_Communication_MainHomepage: string;
		outlet_Communication_PhoneNumber: string;
		outlet_Communication_TwitterHandle: string;
		outlet_Communication_TwitterUrl: string;
		outlet_Focus_Name: string;
		outlet_FullName: string;
		outlet_Id: number;
		outlet_MediaType_Name: string;
		outlet_Name: string;
		outlet_TopicList: string;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		salutation: string;
		title: string;
		topicList: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
		vuelioInfluencerRating: number;
	}
	interface EdCalKendoAzDto {
		addressLine1: string;
		addressLine2: string;
		avatarUrl: string;
		city: string;
		contactId: number;
		contactName: string;
		countryName: string;
		county: string;
		deadlineDate: Date;
		email: string;
		homepage: string;
		id: number;
		issue: string;
		issueDate: Date;
		outletId: number;
		outletName: string;
		outletSortName: string;
		phone: string;
		postalCode: string;
		profile: string;
		sectionName: string;
		topicNames: string[];
		twitterHandle: string;
		twitterUrl: string;
	}
	interface EdCalKendoDto {
		contact_Name: string;
		deadlineDate: Date;
		description: string;
		id: number;
		issue: string;
		issueDate: Date;
		name: string;
		outlet_Address_Country_Name: string;
		outlet_Communication_AvatarUrl: string;
		outlet_Communication_TwitterHandle: string;
		outlet_FullName: string;
		outlet_Name: string;
		sectionName: string;
		topicList: string;
	}
	interface EmailDistributionByRecipientKendoDto {
		clicked: boolean;
		emailDistribution_Id: number;
		emailDistribution_Release_DisplayDateTime: Date;
		emailDistribution_Release_Headline: string;
		emailDistribution_Release_Id: number;
		emailDistribution_Release_Name: string;
		emailDistribution_Release_ScheduledDateTime: Date;
		emailDistribution_Status: AIMC.Baltic.Shared.Enums.DistributionStatus;
		emailDistribution_Visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
		hardBounce: boolean;
		id: number;
		notSentOptedOut: boolean;
		opened: boolean;
		sent: boolean;
		softBounce: boolean;
		spamReport: boolean;
		unsubscribed: boolean;
	}
	interface EmailDistributionRecipientKendoDto {
		avatarUrl: string;
		clicked: boolean;
		contact_Outlet_Name: string;
		emailAddress: string;
		entityId: number;
		entityType: AIMC.Baltic.Shared.Enums.GroupEntityType;
		entityTypeName: string;
		hardBounce: boolean;
		id: number;
		name: string;
		notSentOptedOut: boolean;
		opened: boolean;
		outletAvatarUrl: string;
		outletId: number;
		sent: boolean;
		softBounce: boolean;
		spamReport: boolean;
		status: AIMC.Baltic.Shared.Enums.Status;
		unsubscribed: boolean;
	}
	interface EntityShoppingCartContactKendoDto {
		contact_Name: string;
		contact_Outlet_MediaType_Name: string;
		contact_Outlet_Name: string;
		contact_Title: string;
		contactId: number;
		deleted: boolean;
		id: number;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface EntityShoppingCartOutletKendoDto {
		deleted: boolean;
		id: number;
		outlet_FullName: string;
		outlet_MediaType_Name: string;
		outlet_Name: string;
		outletId: number;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface GroupEntityKendoAzDto {
		addressLine1: string;
		addressLine2: string;
		avatarUrl: string;
		city: string;
		countryName: string;
		county: string;
		email: string;
		facebookUrl: string;
		focusName: string;
		googlePlusUrl: string;
		homepage: string;
		id: number;
		instagramUrl: string;
		jobTitle: string;
		linkedInUrl: string;
		mediaTypeName: string;
		name: string;
		outletAvatarUrl: string;
		outletId: number;
		outletName: string;
		phone: string;
		pinterestUrl: string;
		postalCode: string;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		twitterHandle: string;
		twitterUrl: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
		vuelioInfluencerRating: number;
		youTubeUrl: string;
	}
	interface GroupEntityKendoDto {
		address_City: string;
		address_Country_Name: string;
		address_County: string;
		address_Line1: string;
		address_Line2: string;
		address_PostalCode: string;
		avatarUrl: string;
		deleted: boolean;
		email: string;
		entityId: number;
		entityType: AIMC.Baltic.Shared.Enums.GroupEntityType;
		entityTypeName: string;
		facebookUrl: string;
		focus: string;
		googlePlusUrl: string;
		homePage: string;
		id: number;
		instagramUrl: string;
		linkedInUrl: string;
		mediaType: string;
		name: string;
		outletAvatarUrl: string;
		outletEmail: string;
		outletHomePage: string;
		outletId: number;
		outletName: string;
		outletPhoneNumber: string;
		outletTwitterHandle: string;
		phoneNumber: string;
		pinterestUrl: string;
		title: string;
		topicList: string;
		twitterHandle: string;
		twitterUrl: string;
		viewUrl: string;
		youTubeUrl: string;
	}
	interface GroupKendoAzDto {
		countContacts: number;
		countOutlets: number;
		countTotal: number;
		id: number;
		isTargetOutletGroup: boolean;
		modified: Date;
		modifiedUserName: string;
		name: string;
		shortId: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface GroupKendoDto {
		entitiesCount: number;
		id: number;
		modified: Date;
		name: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface InteractionContactKendoDto {
		contact_Communication_EmailAddress: string;
		contact_Communication_PhoneNumber: string;
		contact_Id: number;
		contact_Name: string;
		contact_Outlet_Id: number;
		contact_Outlet_Name: string;
		id: number;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		status_Id: number;
		status_Name: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface InteractionKendoAzDto {
		created: Date;
		createdUserName: string;
		globalCategoryName: string;
		id: number;
		interactionDateTime: Date;
		interactionTypeName: string;
		internalContactName: string;
		internalResponseTimeName: string;
		modified: Date;
		name: string;
		outcomeName: string;
		ownerName: string;
		responderName: string;
		responseMethodName: string;
		statusName: string;
		tagNames: string[];
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface InteractionKendoDto {
		created: Date;
		createdUser_Id: number;
		createdUser_Name: string;
		id: number;
		interactionDateTime: Date;
		interactionType_Name: string;
		modified: Date;
		name: string;
		status_Id: number;
		status_Name: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface OutletKendoAzDto {
		addressLine1: string;
		addressLine2: string;
		audience: number;
		avatarUrl: string;
		circulation: number;
		circulationOrAudience: number;
		city: string;
		countryName: string;
		county: string;
		email: string;
		facebookUrl: string;
		focusName: string;
		googlePlusUrl: string;
		homepage: string;
		id: number;
		instagramUrl: string;
		linkedInUrl: string;
		mediaTypeName: string;
		name: string;
		phone: string;
		pinterestUrl: string;
		postalCode: string;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		sortName: string;
		topicNames: string[];
		twitterHandle: string;
		twitterUrl: string;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
		visitsPerMonth: number;
		vuelioInfluencerRating: number;
		youTubeUrl: string;
	}
	interface OutletKendoDto {
		address_City: string;
		address_Country_Name: string;
		address_County: string;
		address_Line1: string;
		address_Line2: string;
		address_PostalCode: string;
		circulation: number;
		communication_AvatarUrl: string;
		communication_EmailAddress: string;
		communication_FacebookUrl: string;
		communication_GooglePlusUrl: string;
		communication_InstagramUrl: string;
		communication_LinkedInUrl: string;
		communication_MainHomepage: string;
		communication_PhoneNumber: string;
		communication_PinterestUrl: string;
		communication_TwitterHandle: string;
		communication_TwitterUrl: string;
		communication_YouTubeUrl: string;
		deleted: boolean;
		focus_Name: string;
		fullName: string;
		id: number;
		mediaType_Name: string;
		name: string;
		topicList: string;
		visitsPerMonth: number;
		vuelioInfluencerRating: number;
	}
	interface PoliticalContactPerspectiveKendoDto extends AIMC.Baltic.Dto.Kendo.ContactKendoDto {
		constituency_Name: string;
		euGroup_Name: string;
		firstElected: Date;
		majority: number;
		otherSeatsHeld: string;
		party_Name: string;
	}
	interface PoliticalContactPositionPerspectiveKendoDto {
		contact_Communication_AvatarUrl: string;
		contact_Communication_EmailAddress: string;
		contact_Communication_PhoneNumber: string;
		contact_Majority: number;
		contact_Name: string;
		contact_Outlet_Name: string;
		contact_Party_Name: string;
		contact_Salutation: string;
		contact_Title: string;
		contactPositionType_Name: string;
		id: number;
		organisation: string;
		position: string;
		qualification: string;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		relatedContact_Name: string;
		relatedContactId: number;
		startDate: Date;
		subject: string;
	}
	interface PoliticalContactsGroupEntityPerspectiveKendoDto {
		contact_Communication_AvatarUrl: string;
		contact_Communication_EmailAddress: string;
		contact_Communication_MainHomepage: string;
		contact_Communication_PhoneNumber: string;
		contact_Communication_TwitterUrl: string;
		contact_Constituency_Name: string;
		contact_Majority: number;
		contact_Name: string;
		contact_Outlet_Name: string;
		contact_Party_Name: string;
		contact_Salutation: string;
		contact_Title: string;
		endDate: Date;
		groupMemberType_Name: string;
		id: number;
		ordinality: number;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		role: string;
		startDate: Date;
	}
	interface PoliticalKendoAzDto {
		avatarUrl: string;
		constituencyName: string;
		email: string;
		family: string;
		homepage: string;
		honorificName: string;
		id: number;
		jobTitle: string;
		maritalStatusName: string;
		modeOfAddress: string;
		name: string;
		outletId: number;
		outletName: string;
		partyName: string;
		phone: string;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
		twitterUrl: string;
	}
	interface ReleaseKendoAzDto {
		created: Date;
		displayDateTime: Date;
		distributionStatusIds: string[];
		distributionStatusNames: string[];
		emailDistributionBounceCount: number;
		emailDistributionBouncePercentage: number;
		emailDistributionClickedCount: number;
		emailDistributionClickedPercentage: number;
		emailDistributionDistinctRecipientCount: number;
		emailDistributionHardBounceCount: number;
		emailDistributionHardBouncePercentage: number;
		emailDistributionOpenedCount: number;
		emailDistributionOpenedPercentage: number;
		emailDistributionSentCount: number;
		emailDistributionSentPercentage: number;
		emailDistributionSoftBounceCount: number;
		emailDistributionSoftBouncePercentage: number;
		emailDistributionSpamReportCount: number;
		emailDistributionSpamReportPercentage: number;
		emailDistributionTemplateName: string;
		emailDistributionUnsubscribedCount: number;
		emailDistributionUnsubscribedPercentage: number;
		endDateTime: Date;
		globalCategoryName: string;
		headline: string;
		id: number;
		modified: Date;
		name: string;
		scheduledDateTime: Date;
		startDateTime: Date;
		tagNames: string[];
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface ReleaseKendoDto {
		displayDateTime: Date;
		endDateTime: Date;
		headline: string;
		id: number;
		name: string;
		scheduledDateTime: Date;
		startDateTime: Date;
		visibility: AIMC.Baltic.Shared.Enums.RestrictedVisibility;
	}
	interface UserKendoDto {
		client_Name: string;
		deleted: boolean;
		id: number;
		name: string;
		userName: string;
	}
}
declare module AIMC.Baltic.Dto.KendoFilterDefinition {
	interface KendoAutoCompleteFilterDefinitionDto {
		filter: AIMC.Baltic.Dto.KendoFilterDefinition.KendoGridFilterSetDto;
	}
	interface KendoGridAdditionalColumnDetails {
		alternatePredicateExpression: string;
		columnName: string;
	}
	interface KendoGridFieldDataType {
		fieldDataType: string;
		fieldName: string;
	}
	interface KendoGridFilterDto {
		additionalColumnDetails: AIMC.Baltic.Dto.KendoFilterDefinition.KendoGridAdditionalColumnDetails[];
		excludeIds: number[];
		facetedFilters: AIMC.Baltic.Dto.Faceted.FacetedSearchFilterDto[];
		facetedSearchResultFilters: AIMC.Baltic.Dto.Faceted.FacetedSearchResultFilterDto[];
		fieldDataTypes: AIMC.Baltic.Dto.KendoFilterDefinition.KendoGridFieldDataType[];
		filter: AIMC.Baltic.Dto.KendoFilterDefinition.KendoGridFilterSetDto;
		includeIds: number[];
		optionalId: number;
		page: number;
		queryType: string;
		scoringProfile: string;
		searchFields: string;
		searchMode: string;
		searchText: string;
		showClientOnly: boolean;
		skip: number;
		sort: AIMC.Baltic.Dto.KendoFilterDefinition.KendoGridSortDto[];
		take: number;
		useFacetedSearchAdvancedFilters: boolean;
	}
	interface KendoGridFilterSetDto {
		filters: AIMC.Baltic.Dto.KendoFilterDefinition.KendoGridIndividualFilterDto[];
		logic: string;
	}
	interface KendoGridIndividualFilterDto {
		field: string;
		operator: string;
		value: string;
	}
	interface KendoGridResultDto<TDto> {
		count: number;
		data: TDto[];
		errors: string;
		facetedReturnedFilters: AIMC.Baltic.Dto.Faceted.FacetedSearchResultFilterDto[];
	}
	interface KendoGridSortDto {
		dir: string;
		field: string;
	}
}
declare module AIMC.Baltic.Dto.KendoFilterDefinition.Extended {
	interface KendoGridFilterDtoGroupsBelongingToEntityType extends AIMC.Baltic.Dto.KendoFilterDefinition.KendoGridFilterDto {
		entityType: AIMC.Baltic.Shared.Enums.GroupEntityType;
	}
}
declare module AIMC.Baltic.Dto.MediaDatabase {
	interface AbcReturnDto {
		headlineFigure: number;
		periodDescription: string;
		periodEndDate: Date;
		periodStartDate: Date;
		releaseDate: Date;
	}
	interface AddressDto {
		addressType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		city: string;
		country: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		county: string;
		id: number;
		isParentAddress: boolean;
		line1: string;
		line2: string;
		postalCode: string;
		state: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface BadgeDto {
		awarded: Date;
		deleted: boolean;
		hyperlinkUrl: string;
		id: number;
		imageUrl: string;
		name: string;
	}
	interface CategoryDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		deleted: boolean;
		name: string;
	}
	interface ClientContactTypeDto {
		contactType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		enabled: boolean;
		fields: AIMC.Baltic.Dto.MediaDatabase.ClientContactTypeFieldDto[];
		id: number;
	}
	interface ClientContactTypeFieldDto {
		contactTypeField: AIMC.Baltic.Dto.MediaDatabase.ContactTypeFieldDto;
		enabled: boolean;
		id: number;
	}
	interface ClientDataAreaDto {
		dataArea: AIMC.Baltic.Dto.MediaDatabase.DataAreaDto;
		deleted: boolean;
		id: number;
	}
	interface ClientDto {
		applicantTypes: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		clientLabels: AIMC.Baltic.Dto.MediaDatabase.ClientLabelDto[];
		contactTypes: AIMC.Baltic.Dto.MediaDatabase.ClientContactTypeDto[];
		created: Date;
		createdUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		dataArea: AIMC.Baltic.Dto.MediaDatabase.DataAreaDto;
		deleted: boolean;
		elasticEmailApiKey: string;
		globalCategories: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		id: number;
		influences: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		interactionContactStatuses: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		interactionStatuses: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		interactionTypes: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		maxNumCanvases: number;
		modified: Date;
		modifiedUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		name: string;
		omcPassword: string;
		omcUrl: string;
		omcUserName: string;
		outletFieldVisibility: AIMC.Baltic.Dto.MediaDatabase.ClientOutletFieldVisibilityDto[];
		powers: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		sendFromEmailDefault: string;
		sendFromEmailDomain: string;
		sendFromName: string;
		setInactive: boolean;
		slug: string;
		sourceKey: string;
		subscribedDataAreas: AIMC.Baltic.Dto.MediaDatabase.ClientDataAreaDto[];
		turnOnRebrand: boolean;
		udfDropdown01s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown02s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown03s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown04s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown05s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown06s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown07s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown08s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown09s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown10s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown11s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown12s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown13s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown14s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfDropdown15s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect01s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect02s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect03s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect04s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect05s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect06s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect07s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect08s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect09s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect10s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect11s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect12s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect13s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect14s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect15s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect16s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect17s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect18s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect19s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		udfMultiselect20s: AIMC.Baltic.Dto.MediaDatabase.CustomListItemDto[];
		userGroups: AIMC.Baltic.Dto.MediaDatabase.UserGroupDto[];
		vuelioSuffix: string;
	}
	interface ClientLabelDto {
		id: number;
		label: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		plural: string;
		singular: string;
	}
	interface ClientOutletFieldVisibilityDto {
		enabled: boolean;
		field: AIMC.Baltic.Dto.MediaDatabase.FieldDto;
		id: number;
	}
	interface CommunicationDto {
		avatarUrl: string;
		directHomepage: string;
		editorialCalendarUrl: string;
		emailAddress: string;
		emails: AIMC.Baltic.Dto.MediaDatabase.CommunicationEmailDto[];
		facebookUrl: string;
		faxNumber: string;
		googlePlusUrl: string;
		id: number;
		instagramUrl: string;
		interviewUrl: string;
		linkedInUrl: string;
		mainHomepage: string;
		otherSocialUrl: string;
		phoneNumber: string;
		phoneNumbers: AIMC.Baltic.Dto.MediaDatabase.CommunicationPhoneNumberDto[];
		pinterestUrl: string;
		rssUrl: string;
		socialMedia: AIMC.Baltic.Dto.MediaDatabase.CommunicationSocialMediaDto[];
		twitterHandle: string;
		twitterUrl: string;
		youTubeUrl: string;
	}
	interface CommunicationEmailDto {
		deleted: boolean;
		emailAddress: string;
		emailType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
	}
	interface CommunicationPhoneNumberDto extends AIMC.Baltic.Dto.MediaDatabase.PhoneNumberDto {
		deleted: boolean;
		id: number;
		phoneNumberType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface CommunicationSocialMediaDto {
		deleted: boolean;
		id: number;
		socialMediaType: AIMC.Baltic.Dto.MediaDatabase.SocialMediaTypeDto;
		url: string;
	}
	interface ConstituencyDto {
		deleted: boolean;
		id: number;
		name: string;
		ordinality: number;
		outlet: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface ContactCommunicationMethodDto {
		communicationMethod: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		deleted: boolean;
		id: number;
	}
	interface ContactDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		address: AIMC.Baltic.Dto.MediaDatabase.AddressDto;
		applicantType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		badges: AIMC.Baltic.Dto.MediaDatabase.BadgeDto[];
		communication: AIMC.Baltic.Dto.MediaDatabase.CommunicationDto;
		constituency: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		contactIdentity: AIMC.Baltic.Dto.MediaDatabase.ContactIdentityDto;
		contactIdentityId: number;
		contactType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		dataArea: AIMC.Baltic.Dto.MediaDatabase.DataAreaDto;
		dateOfBirth: Date;
		deleted: boolean;
		department: string;
		desk: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		displayName: string;
		edCalCount: number;
		editable: boolean;
		emailDistributionCount: number;
		employer: string;
		enrichment: AIMC.Baltic.Dto.MediaDatabase.EnrichmentDto;
		euGroup: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		externalIdentifiers: AIMC.Baltic.Dto.MediaDatabase.ContactExternalIdentifierDto[];
		family: string;
		firstElected: Date;
		firstName: string;
		gender: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		groupCount: number;
		honorificName: string;
		influence: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		interactionCount: number;
		key: boolean;
		languages: AIMC.Baltic.Dto.MediaDatabase.ContactLanguageDto[];
		lastName: string;
		linkedProfiles: AIMC.Baltic.Dto.MediaDatabase.LinkedContactProfileDto[];
		majority: number;
		maritalStatus: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		middleName: string;
		modeOfAddress: string;
		monitoringOnly: boolean;
		name: string;
		nameSuffix: string;
		notAPrContact: boolean;
		noteCount: number;
		optInType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		otherSeatsHeld: string;
		outlet: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		party: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		placeOfBirth: string;
		politicalBackground: string;
		positions: AIMC.Baltic.Dto.MediaDatabase.ContactPositionDto[];
		power: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		preferredCommunicationMethods: AIMC.Baltic.Dto.MediaDatabase.ContactCommunicationMethodDto[];
		professionalInterests: string;
		profile: string;
		proprietaryData: AIMC.Baltic.Dto.MediaDatabase.ProprietaryContactDataDto;
		recreationalInterests: string;
		salutation: string;
		sourceKey: string;
		status: AIMC.Baltic.Shared.Enums.Status;
		title: string;
		topics: AIMC.Baltic.Dto.MediaDatabase.ContactTopicDto[];
		udfCollection: AIMC.Baltic.Dto.MediaDatabase.UdfCollectionDto;
		vuelioInfluencerRating: number;
	}
	interface ContactExternalIdentifierDto {
		deleted: boolean;
		externalIdentifierId: string;
		externalIdentifierSystem: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
	}
	interface ContactIdentityDto {
		created: Date;
		createdUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		dataArea: AIMC.Baltic.Dto.MediaDatabase.DataAreaDto;
		deleted: boolean;
		id: number;
		modified: Date;
		modifiedUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		sourceKey: string;
	}
	interface ContactLanguageDto {
		deleted: boolean;
		id: number;
		language: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface ContactPositionDto {
		contactPositionType: AIMC.Baltic.Dto.MediaDatabase.ListItemOrdinalityDto;
		deleted: boolean;
		endDate: Date;
		id: number;
		organisation: string;
		position: string;
		qualification: string;
		relatedContact: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		startDate: Date;
		subject: string;
	}
	interface ContactPositionTypeDto {
		deleted: boolean;
		id: number;
		name: string;
		ordinality: number;
	}
	interface ContactTopicDto {
		deleted: boolean;
		id: number;
		title: AIMC.Baltic.Dto.MediaDatabase.TitleDto;
		topic: AIMC.Baltic.Dto.MediaDatabase.TopicDto;
	}
	interface ContactTypeDto {
		deleted: boolean;
		enabled: boolean;
		fields: AIMC.Baltic.Dto.MediaDatabase.ContactTypeFieldDto[];
		id: number;
		name: string;
	}
	interface ContactTypeFieldDto {
		enabled: boolean;
		field: AIMC.Baltic.Dto.MediaDatabase.FieldDto;
		id: number;
	}
	interface CountryDto {
		code: string;
		deleted: boolean;
		id: number;
		name: string;
		states: AIMC.Baltic.Dto.MediaDatabase.ListItemDto[];
	}
	interface CustomListItemDto {
		deleted: boolean;
		id: number;
		name: string;
		ordinality: number;
	}
	interface DataAreaDto {
		id: number;
		isCustomerData: boolean;
		isPaidForOption: boolean;
		name: string;
	}
	interface DepartmentDto {
		deleted: boolean;
		departmentType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		email: string;
		faxNumber: AIMC.Baltic.Dto.MediaDatabase.DepartmentPhoneNumberDto;
		homePage: string;
		id: number;
		phoneNumber: AIMC.Baltic.Dto.MediaDatabase.DepartmentPhoneNumberDto;
	}
	interface DepartmentPhoneNumberDto extends AIMC.Baltic.Dto.MediaDatabase.PhoneNumberDto {
		deleted: boolean;
		id: number;
	}
	interface DistributionBaseDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		deleted: boolean;
		distributionType: AIMC.Baltic.Shared.Enums.DistributionType;
		editable: boolean;
		release: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		status: AIMC.Baltic.Shared.Enums.DistributionStatus;
	}
	interface EdCalDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		advertisingLeadDays: number;
		contact: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		dataArea: AIMC.Baltic.Dto.MediaDatabase.DataAreaDto;
		deadlineDate: Date;
		description: string;
		editable: boolean;
		featuresLeadDays: number;
		issue: string;
		issueDate: Date;
		language: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		name: string;
		outlet: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		sectionName: string;
		sourceKey: string;
		topics: AIMC.Baltic.Dto.MediaDatabase.EdCalTopicDto[];
	}
	interface EdCalTopicDto {
		deleted: boolean;
		id: number;
		topic: AIMC.Baltic.Dto.MediaDatabase.TopicDto;
	}
	interface EmailDistributionClientDetailsDto {
		sendFromEmailDefault: string;
		sendFromEmailDomain: string;
		sendFromName: string;
	}
	interface EmailDistributionContactDto {
		contact: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionContactListItemDto;
		deleted: boolean;
		id: number;
	}
	interface EmailDistributionContactListItemDto extends AIMC.Baltic.Dto.MediaDatabase.EmailDistributionEntityItemDto {
		outletName: string;
	}
	interface EmailDistributionDto extends AIMC.Baltic.Dto.MediaDatabase.DistributionBaseDto {
		clickedCount: number;
		contacts: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionContactDto[];
		distinctRecipientCount: number;
		greetingFormat: AIMC.Baltic.Shared.Enums.GreetingFormat;
		greetingPrefix: string;
		greetingSuffix: string;
		groups: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionGroupDto[];
		hardBounceCount: number;
		manualRecipients: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto[];
		openedCount: number;
		outlets: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionOutletDto[];
		sendFromEmailDomain: string;
		sendFromEmailPrefix: string;
		sendFromName: string;
		sendFromReplyToDomain: string;
		sentCount: number;
		softBounceCount: number;
		spamReportCount: number;
		template: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		unsubscribedCount: number;
	}
	interface EmailDistributionEntityItemDto {
		communicationEmailAddress: string;
		id: number;
		name: string;
	}
	interface EmailDistributionGroupDto {
		deleted: boolean;
		group: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
	}
	interface EmailDistributionManualRecipientDto {
		deleted: boolean;
		emailAddress: string;
		firstName: string;
		id: number;
		lastName: string;
		salutation: string;
	}
	interface EmailDistributionOutletDto {
		deleted: boolean;
		id: number;
		outlet: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionOutletListItemDto;
	}
	interface EmailDistributionOutletListItemDto extends AIMC.Baltic.Dto.MediaDatabase.EmailDistributionEntityItemDto {
	}
	interface EmailDto {
		body: string;
		fromName: string;
		recipients: AIMC.Baltic.Dto.MediaDatabase.EmailDtoRecipientDto[];
		replyToEmail: string;
		subject: string;
	}
	interface EmailDtoRecipientDto {
		contact: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		emailAddress: string;
		outlet: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface EmailTemplateDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		bodyHtml: string;
		bodyText: string;
		css: string;
		deleted: boolean;
		fromEmail: string;
		fromName: string;
		name: string;
		screenshotUrl: string;
		sourceKey: string;
		subject: string;
	}
	interface EmbedDto {
		error: string;
		html: string;
		status: number;
	}
	interface EnrichmentDto {
		abcLastReturnReleaseDate: Date;
		abcReportingFrequencyDescription: string;
		abcReturns: AIMC.Baltic.Dto.MediaDatabase.AbcReturnDto[];
		ahrefsLastReceived: Date;
		ahrefsRating: number;
		kloutBucket: string;
		kloutDeltaDay: number;
		kloutDeltaMonth: number;
		kloutDeltaWeek: number;
		kloutLastReceived: Date;
		kloutScore: number;
		kredInfluenceScore: number;
		kredLastReceived: Date;
		kredOutreachScore: number;
		mozDomainAuthority: number;
		mozExternalEquityLinks: number;
		mozLastReceived: Date;
		mozLinks: number;
		mozPageAuthority: number;
		mozSubdomainMozRankNormalised: number;
		mozUrlRankNormalised: number;
		similarWebMonthlyTraffic: AIMC.Baltic.Dto.MediaDatabase.SimilarWebTrafficFigureDto[];
		similarWebSimilarWebsites: AIMC.Baltic.Dto.MediaDatabase.SimilarWebSimilarWebsiteDto[];
		similarWebSimilarWebsitesLastReceived: Date;
		similarWebTrafficLastReceived: Date;
	}
	interface EntityShoppingCartDto {
		deleted: boolean;
		entityId: number;
		entityType: AIMC.Baltic.Shared.Enums.GroupEntityType;
		id: number;
	}
	interface ExampleObjectDto {
		created: Date;
		deleted: boolean;
		id: number;
		modified: Date;
		name: string;
		setInactive: boolean;
		userName: string;
	}
	interface FieldDto {
		id: number;
		name: string;
		ordinality: number;
		shortName: string;
	}
	interface GenderDto {
		deleted: boolean;
		id: number;
		name: string;
	}
	interface GroupDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		deleted: boolean;
		editable: boolean;
		entities: AIMC.Baltic.Dto.MediaDatabase.GroupEntityDto[];
		groupType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		isTargetOutletGroup: boolean;
		name: string;
		outlet: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		profile: string;
		status: AIMC.Baltic.Shared.Enums.Status;
	}
	interface GroupEntityDto {
		deleted: boolean;
		entityId: number;
		entityType: AIMC.Baltic.Shared.Enums.GroupEntityType;
		entityTypeName: string;
		id: number;
		jobTitle: string;
		mediaType: string;
		name: string;
		outletName: string;
		status: AIMC.Baltic.Shared.Enums.Status;
	}
	interface GroupEntityExistenceDto {
		hasContacts: boolean;
		hasOutlets: boolean;
		id: number;
	}
	interface GroupRecordRemoveDto {
		recordId: number;
		recordType: AIMC.Baltic.Shared.Enums.RecordType;
	}
	interface GroupsForPoliticalContactDto {
		endDate: Date;
		group_GroupType_Id: number;
		group_GroupType_Name: string;
		group_GroupType_Ordinality: number;
		group_Id: number;
		group_Name: string;
		group_Outlet_Id: number;
		group_Outlet_Name: string;
		groupMemberType_Name: string;
		role: string;
		startDate: Date;
	}
	interface GroupTypeDto {
		deleted: boolean;
		id: number;
		name: string;
		ordinality: number;
	}
	interface IdentifierStatusDto {
		deleted: boolean;
		id: number;
		name: string;
	}
	interface InfluencerMentionDto {
		communication: AIMC.Baltic.Dto.MediaDatabase.CommunicationDto;
		handle: string;
		id: number;
		imageUrl: string;
		name: string;
		outlet: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		profile: string;
		title: string;
		topics: AIMC.Baltic.Dto.MediaDatabase.ListItemDto[];
		tweetId: string;
		vuelioInfluencerRating: number;
	}
	interface InteractionContactDto {
		contact: AIMC.Baltic.Dto.MediaDatabase.InteractionContactListItemDto;
		deleted: boolean;
		id: number;
		status: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface InteractionContactListItemDto {
		communicationEmailAddress: string;
		communicationPhoneNumber: string;
		id: number;
		name: string;
		outletId: number;
		outletName: string;
	}
	interface InteractionDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		additionalContacts: string;
		contacts: AIMC.Baltic.Dto.MediaDatabase.InteractionContactDto[];
		deleted: boolean;
		details: string;
		direction: AIMC.Baltic.Shared.Enums.Direction;
		editable: boolean;
		globalCategory: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		interactionDateTime: Date;
		interactionType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		internalContact: AIMC.Baltic.Dto.MediaDatabase.InteractionContactListItemDto;
		internalMemo: string;
		internalResponseTime: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		location: string;
		name: string;
		outcome: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		owner: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		releases: AIMC.Baltic.Dto.MediaDatabase.InteractionReleaseDto[];
		responder: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		response: string;
		responseDateTime: Date;
		responseMethod: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		status: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		tags: AIMC.Baltic.Dto.MediaDatabase.TagCollectionItemDto[];
		udfCollection: AIMC.Baltic.Dto.MediaDatabase.UdfCollectionDto;
	}
	interface InteractionReleaseDto {
		deleted: boolean;
		id: number;
		release: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface KeyValueStoreDto {
		created: Date;
		createdUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
		level: AIMC.Baltic.Shared.Enums.KeyValueStoreLevel;
		modified: Date;
		modifiedUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		name: string;
		value: string;
	}
	interface LabelDto {
		defaultPlural: string;
		defaultSingular: string;
		id: number;
		name: string;
		ordinality: number;
	}
	interface LinkedContactProfileDto {
		id: number;
		name: string;
		outletId: number;
		outletName: string;
		title: string;
	}
	interface LinkedOutletsDto {
		bureaux: AIMC.Baltic.Dto.MediaDatabase.OutletSummaryDto[];
		onlineVersions: AIMC.Baltic.Dto.MediaDatabase.OutletSummaryDto[];
		otherOutletsInMarket: AIMC.Baltic.Dto.MediaDatabase.OutletSummaryDto[];
		shows: AIMC.Baltic.Dto.MediaDatabase.OutletSummaryDto[];
		sisterOutlets: AIMC.Baltic.Dto.MediaDatabase.OutletSummaryDto[];
		specialSections: AIMC.Baltic.Dto.MediaDatabase.OutletSummaryDto[];
	}
	interface LinkSocialMediaDto {
		authorisationSecret: string;
		authorisationToken: string;
		authorisationUrl: string;
		isUserAuthorisationRequired: boolean;
		message: string;
		socialMediaType: AIMC.Baltic.Dto.MediaDatabase.SocialMediaTypeDto;
	}
	interface ListItemDeletedDto extends AIMC.Baltic.Dto.MediaDatabase.ListItemDto {
		deleted: boolean;
	}
	interface ListItemDisplayDto extends AIMC.Baltic.Dto.MediaDatabase.ListItemDto {
		displayName: string;
	}
	interface ListItemDto {
		id: number;
		name: string;
	}
	interface ListItemEntityDto extends AIMC.Baltic.Dto.MediaDatabase.ListItemDeletedDto {
		entityType: AIMC.Baltic.Shared.Enums.GroupEntityType;
	}
	interface ListItemOrdinalityDto extends AIMC.Baltic.Dto.MediaDatabase.ListItemDto {
		ordinality: number;
	}
	interface MediaTypeDto {
		deleted: boolean;
		group: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
		inheritsAddress: boolean;
		inheritsAllCommunication: boolean;
		inheritsUrl: boolean;
		isBureau: boolean;
		isOnlineVersion: boolean;
		isShow: boolean;
		isSpecialSection: boolean;
		name: string;
	}
	interface MediaTypeGroupDto {
		deleted: boolean;
		id: number;
		mediaTypes: AIMC.Baltic.Dto.MediaDatabase.ListItemDto[];
		name: string;
	}
	interface NoteDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		contactId: number;
		deleted: boolean;
		description: string;
		editable: boolean;
		interactionId: number;
		outletId: number;
		title: string;
	}
	interface OmcDistributionDto extends AIMC.Baltic.Dto.MediaDatabase.DistributionBaseDto {
		url: string;
	}
	interface OptInTypeDto {
		deleted: boolean;
		id: number;
		name: string;
	}
	interface OutletDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		address: AIMC.Baltic.Dto.MediaDatabase.AddressDto;
		advertisingLeadDays: number;
		audience: number;
		badges: AIMC.Baltic.Dto.MediaDatabase.BadgeDto[];
		broadcastFrequency: string;
		category: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		channel: string;
		circulation: number;
		colorAdRate: number;
		communication: AIMC.Baltic.Dto.MediaDatabase.CommunicationDto;
		contactCount: number;
		costPerMilleAdRate: number;
		dataArea: AIMC.Baltic.Dto.MediaDatabase.DataAreaDto;
		deleted: boolean;
		departments: AIMC.Baltic.Dto.MediaDatabase.DepartmentDto[];
		edCalCount: number;
		editable: boolean;
		emailDistributionCount: number;
		enrichment: AIMC.Baltic.Dto.MediaDatabase.EnrichmentDto;
		externalIdentifiers: AIMC.Baltic.Dto.MediaDatabase.OutletExternalIdentifierDto[];
		featureLeadDays: number;
		focus: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		frequencyCodes: AIMC.Baltic.Dto.MediaDatabase.OutletFrequencyCodeDto[];
		fullName: string;
		groupCount: number;
		languages: AIMC.Baltic.Dto.MediaDatabase.OutletLanguageDto[];
		linkedOutlets: AIMC.Baltic.Dto.MediaDatabase.LinkedOutletsDto;
		mediaType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		mediaTypeGroup: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		monitoringOnly: boolean;
		monoAdRate: number;
		name: string;
		noteCount: number;
		owner: string;
		parent: AIMC.Baltic.Dto.MediaDatabase.OutletListItemDto;
		prefix: string;
		profile: string;
		profileCodes: AIMC.Baltic.Dto.MediaDatabase.OutletProfileCodeDto[];
		proprietaryData: AIMC.Baltic.Dto.MediaDatabase.ProprietaryOutletDataDto;
		radioFormats: AIMC.Baltic.Dto.MediaDatabase.OutletRadioFormatDto[];
		sccAdRate: number;
		showTimeException: string;
		showTimes: AIMC.Baltic.Dto.MediaDatabase.ShowTimeDto[];
		sourceKey: string;
		status: AIMC.Baltic.Shared.Enums.Status;
		targetAreas: AIMC.Baltic.Dto.MediaDatabase.OutletTargetAreaDto[];
		topics: AIMC.Baltic.Dto.MediaDatabase.OutletTopicDto[];
		udfCollection: AIMC.Baltic.Dto.MediaDatabase.UdfCollectionDto;
		visitsPerMonth: number;
		vuelioInfluencerRating: number;
	}
	interface OutletExternalIdentifierDto {
		deleted: boolean;
		externalIdentifierId: string;
		externalIdentifierName: string;
		externalIdentifierSystem: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
	}
	interface OutletFrequencyCodeDto {
		deleted: boolean;
		frequencyCode: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
	}
	interface OutletLanguageDto {
		deleted: boolean;
		id: number;
		language: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface OutletListItemDto {
		dataAreaId: number;
		id: number;
		name: string;
		viewable: boolean;
	}
	interface OutletMatchDto {
		canonicalOutletId: number;
		canonicalOutletName: string;
		countryId: number;
		created: Date;
		createdUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		id: number;
		identifierStatus: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		modified: Date;
		modifiedUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		providerId: number;
		providerName: string;
		providerOutletAdditionalInformation: string;
		providerOutletId: string;
		providerOutletName: string;
		providerOutletUrl: string;
	}
	interface OutletMatchQueryDto {
		countryId: number;
		providerId: number;
		providerOutletId: string;
		providerOutletName: string;
		providerOutletUrl: string;
	}
	interface OutletProfileCodeDto {
		deleted: boolean;
		id: number;
		profileCode: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface OutletRadioFormatDto {
		deleted: boolean;
		id: number;
		radioFormat: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface OutletSummaryDto {
		city: string;
		country: string;
		county: string;
		dataAreaId: number;
		emailAddress: string;
		id: number;
		line1: string;
		line2: string;
		mainHomepage: string;
		name: string;
		phoneNumber: string;
		postalCode: string;
		state: string;
		topicList: string;
		viewable: boolean;
	}
	interface OutletTargetAreaDto {
		deleted: boolean;
		id: number;
		targetArea: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface OutletTopicDto {
		deleted: boolean;
		id: number;
		topic: AIMC.Baltic.Dto.MediaDatabase.TopicDto;
	}
	interface PartyDto {
		code: string;
		deleted: boolean;
		id: number;
		name: string;
		ordinality: number;
	}
	interface PhoneNumberDto {
		areaCode: string;
		countryCode: string;
		dialNumber: string;
		extension: string;
		formatted: string;
	}
	interface PoliticalOutletDto {
		hasConstituencies: boolean;
		id: number;
		mediaTypeId: number;
		mediaTypeName: string;
		name: string;
	}
	interface ProprietaryContactDataDto extends AIMC.Baltic.Dto.MediaDatabase.ProprietaryDataDto {
		contactId: number;
		preferredCommunicationMethod: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		title: string;
	}
	interface ProprietaryDataDto {
		address: AIMC.Baltic.Dto.MediaDatabase.AddressDto;
		clientId: number;
		deleted: boolean;
		emailAddress: string;
		facebookUrl: string;
		faxNumber: string;
		id: number;
		linkedInUrl: string;
		mobileNumber: string;
		note: string;
		phoneNumber: string;
		pitch: string;
		twitterHandle: string;
		twitterUrl: string;
		useContactDetailsInUi: boolean;
		useEmailAddressForReleases: boolean;
		websiteUrl: string;
	}
	interface ProprietaryOutletDataDto extends AIMC.Baltic.Dto.MediaDatabase.ProprietaryDataDto {
		outletId: number;
	}
	interface RealwireCategoryDto extends AIMC.Baltic.Dto.MediaDatabase.ListItemDto {
	}
	interface RealwireDistributionAssetBaseDto {
		assetUrl: string;
		deleted: boolean;
		id: number;
		name: string;
	}
	interface RealwireDistributionCategoryDto {
		deleted: boolean;
		id: number;
		realwireCategory: AIMC.Baltic.Dto.MediaDatabase.RealwireCategoryDto;
	}
	interface RealwireDistributionDto extends AIMC.Baltic.Dto.MediaDatabase.DistributionBaseDto {
		attachments: AIMC.Baltic.Dto.MediaDatabase.RealwireDistributionAssetBaseDto[];
		categories: AIMC.Baltic.Dto.MediaDatabase.RealwireDistributionCategoryDto[];
		images: AIMC.Baltic.Dto.MediaDatabase.RealwireDistributionAssetBaseDto[];
		internalContactEmail: string;
		internalContactTelephone: string;
		links: AIMC.Baltic.Dto.MediaDatabase.RealwireDistributionLinkDto[];
		tags: string;
	}
	interface RealwireDistributionLinkDto {
		deleted: boolean;
		id: number;
		name: string;
		url: string;
	}
	interface ReleaseDto extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		boilerPlate: string;
		coreCopy: string;
		deleted: boolean;
		displayDateTime: Date;
		editable: boolean;
		endDateTime: Date;
		globalCategory: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		headline: string;
		isTest: boolean;
		name: string;
		notesToEditor: string;
		scheduledDateTime: Date;
		scheduledTimeZoneView: string;
		startDateTime: Date;
		subheading: string;
		tags: AIMC.Baltic.Dto.MediaDatabase.TagCollectionItemDto[];
	}
	interface RoleDto {
		created: Date;
		id: number;
		modified: Date;
		name: number;
	}
	interface ShoppingCartSummaryDto {
		contactCount: number;
		outletCount: number;
	}
	interface ShowTimeDto {
		deleted: boolean;
		endTime: Date;
		friday: boolean;
		id: number;
		monday: boolean;
		onAirTime: string;
		saturday: boolean;
		startTime: Date;
		sunday: boolean;
		thursday: boolean;
		tuesday: boolean;
		wednesday: boolean;
	}
	interface SimilarWebSimilarWebsiteDto {
		dataAreaId: number;
		name: string;
		outletId: number;
		viewable: boolean;
	}
	interface SimilarWebTrafficFigureDto {
		date: Date;
		value: number;
	}
	interface SmartSearchDto {
		avatarUrl: string;
		contactOutlet: string;
		contactOutletId: number;
		country: string;
		email: string;
		entityType: string;
		facebook: string;
		id: number;
		name: string;
		outletType: string;
		phone: string;
		twitter: string;
		twitterHandle: string;
		website: string;
	}
	interface SocialMediaTypeDto {
		created: Date;
		deleted: boolean;
		glyphCode: string;
		glyphColour: string;
		id: number;
		modified: Date;
		name: string;
		urlRoot: string;
	}
	interface SocialProviderDto {
		contentPlaceHolder: string;
		contentSource: string;
		deleted: boolean;
		fontAwesomeClass: string;
		id: number;
		imageSource: string;
		name: string;
		useFontAwesome: boolean;
	}
	interface SocialProviderTypeDto {
		deleted: boolean;
		id: number;
		name: string;
	}
	interface SocialStatisticItemDto {
		deleted: boolean;
		displayColor: string;
		fontAwesomeClass: string;
		id: number;
		name: string;
		numericalValue: number;
		percentageValue: number;
		statisticsValue: string;
		useFontAwesome: boolean;
	}
	interface SocialWallConfigDto {
		maxNumCanvases: number;
	}
	interface SocialWallDistributionDto extends AIMC.Baltic.Dto.MediaDatabase.DistributionBaseDto {
		socialWall: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		socialWallItem: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface SocialWallDto extends AIMC.Baltic.Dto.MediaDatabase.SocialWallDtoBase {
		socialWallItems: AIMC.Baltic.Dto.MediaDatabase.SocialWallItemDto[];
	}
	interface SocialWallDtoBase extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		deleted: boolean;
		editable: boolean;
		imageSource: string;
		isHorizontalOrder: boolean;
		name: string;
		path: string;
		public: boolean;
		publishedDate: Date;
		showVuelioLogo: boolean;
		slug: string;
		socialWallLayout: AIMC.Baltic.Dto.MediaDatabase.SocialWallLayoutDto;
		socialWallTheme: AIMC.Baltic.Dto.MediaDatabase.SocialWallThemeDto;
		sortOrder: AIMC.Baltic.Shared.Enums.SortOrder;
	}
	interface SocialWallItemDto extends AIMC.Baltic.Dto.MediaDatabase.SocialWallItemDtoBase {
		socialStatisticItems: AIMC.Baltic.Dto.MediaDatabase.SocialStatisticItemDto[];
		socialValue: string;
		socialValueSourceUrl: string;
	}
	interface SocialWallItemDtoBase extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase {
		deleted: boolean;
		editable: boolean;
		isAboutUsWidget: boolean;
		isContactsWidget: boolean;
		isInfoColumnContent: boolean;
		name: string;
		ordinality: number;
		path: string;
		public: boolean;
		showName: boolean;
		slug: string;
		socialProvider: AIMC.Baltic.Dto.MediaDatabase.SocialProviderDto;
		socialProviderType: AIMC.Baltic.Dto.MediaDatabase.SocialProviderTypeDto;
		socialWall: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface SocialWallItemSummaryDto extends AIMC.Baltic.Dto.MediaDatabase.SocialWallItemDtoBase {
	}
	interface SocialWallLayoutDto {
		deleted: boolean;
		id: number;
		imageSource: string;
		name: string;
	}
	interface SocialWallLinkDto {
		fontAwesomeClass: string;
		id: number;
		socialName: string;
		socialUrl: string;
	}
	interface SocialWallSummaryDto extends AIMC.Baltic.Dto.MediaDatabase.SocialWallDtoBase {
		socialWallItems: AIMC.Baltic.Dto.MediaDatabase.SocialWallItemSummaryDto[];
	}
	interface SocialWallThemeDto {
		deleted: boolean;
		id: number;
		name: string;
	}
	interface StateDto {
		code: string;
		country: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		deleted: boolean;
		id: number;
		name: string;
	}
	interface TagCollectionItemDto {
		deleted: boolean;
		id: number;
		tag: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface TargetAreaDto {
		areaType: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		deleted: boolean;
		id: number;
		name: string;
		parent: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface TargetAreaTypeDto {
		country: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		deleted: boolean;
		id: number;
		name: string;
	}
	interface TargetGroupItemDto {
		entityId: number;
		groupId: number;
	}
	interface TitleDto {
		deleted: boolean;
		id: number;
		name: string;
	}
	interface ToHtmlConvertDocDto {
		base64Data: string;
		filename: string;
	}
	interface TopicDto {
		created: Date;
		deleted: boolean;
		id: number;
		modified: Date;
		name: string;
		parent: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface TweetDto {
		date: Date;
		followerCount: string;
		handle: string;
		text: string;
		tweetCount: string;
		tweetId: string;
		user: string;
	}
	interface TwitterAuthenticationDto {
		isUserAuthorisationRequired: boolean;
		message: string;
		twitterRedirectUrl: string;
	}
	interface TwitterDto {
		authorisationSecret: string;
		authorisationToken: string;
		isUserAuthorisationRequired: boolean;
		loggedInUserScreenName: string;
		message: string;
		tweets: AIMC.Baltic.Dto.MediaDatabase.TweetDto[];
		twitterUrl: string;
	}
	interface TwitterEntityDto {
		callBackUrl: string;
		handle: string;
		reply: string;
		tweetId: string;
	}
	interface UdfCollectionDto {
		checkbox01: boolean;
		checkbox02: boolean;
		checkbox03: boolean;
		checkbox04: boolean;
		checkbox05: boolean;
		checkbox06: boolean;
		checkbox07: boolean;
		checkbox08: boolean;
		checkbox09: boolean;
		checkbox10: boolean;
		checkbox11: boolean;
		checkbox12: boolean;
		checkbox13: boolean;
		checkbox14: boolean;
		checkbox15: boolean;
		dropdown01: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown02: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown03: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown04: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown05: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown06: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown07: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown08: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown09: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown10: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown11: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown12: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown13: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown14: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		dropdown15: AIMC.Baltic.Dto.MediaDatabase.UdfDropdownDto;
		id: number;
		multiselect01: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect02: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect03: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect04: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect05: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect06: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect07: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect08: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect09: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect10: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect11: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect12: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect13: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect14: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect15: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect16: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect17: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect18: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect19: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		multiselect20: AIMC.Baltic.Dto.MediaDatabase.UdfMultiselectDto[];
		textbox01: string;
		textbox02: string;
		textbox03: string;
		textbox04: string;
		textbox05: string;
		textbox06: string;
		textbox07: string;
		textbox08: string;
		textbox09: string;
		textbox10: string;
		textbox11: string;
		textbox12: string;
		textbox13: string;
		textbox14: string;
		textbox15: string;
		textline01: string;
		textline02: string;
		textline03: string;
		textline04: string;
		textline05: string;
		textline06: string;
		textline07: string;
		textline08: string;
		textline09: string;
		textline10: string;
		textline11: string;
		textline12: string;
		textline13: string;
		textline14: string;
		textline15: string;
		textline16: string;
		textline17: string;
		textline18: string;
		textline19: string;
		textline20: string;
		textline21: string;
		textline22: string;
		textline23: string;
		textline24: string;
		textline25: string;
		textline26: string;
		textline27: string;
		textline28: string;
		textline29: string;
		textline30: string;
	}
	interface UdfDropdownDto {
		id: number;
		name: string;
	}
	interface UdfMultiselectDto {
		deleted: boolean;
		id: number;
		udfMultiselect: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
	}
	interface UserDto {
		client: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		created: Date;
		createdUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		deleted: boolean;
		emailAddress: string;
		firstName: string;
		id: number;
		lastName: string;
		middleName: string;
		modified: Date;
		modifiedUser: AIMC.Baltic.Dto.MediaDatabase.ListItemDto;
		name: string;
		password: string;
		passwordHash: string;
		roles: AIMC.Baltic.Dto.MediaDatabase.UserRoleDto[];
		setInactive: boolean;
		userGroups: AIMC.Baltic.Dto.MediaDatabase.UserUserGroupDto[];
	}
	interface UserGroupDto {
		deleted: boolean;
		id: number;
		name: string;
	}
	interface UserRoleDto {
		deleted: boolean;
		id: number;
		roleDto: AIMC.Baltic.Dto.MediaDatabase.RoleDto;
	}
	interface UserSocialMediaAccessTokenDto {
		deleted: boolean;
		id: number;
		screenName: string;
		secret: string;
		socialMediaTypeDto: AIMC.Baltic.Dto.MediaDatabase.SocialMediaTypeDto;
		token: string;
		userDto: AIMC.Baltic.Dto.MediaDatabase.UserDto;
	}
	interface UserUserGroupDto {
		deleted: boolean;
		id: number;
		userGroup: AIMC.Baltic.Dto.MediaDatabase.UserGroupDto;
	}
}


