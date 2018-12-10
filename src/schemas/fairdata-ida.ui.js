export default {
	tabs: [
		{ label: 'Content Description', uri: 'description' },
		{ label: 'Temporal and Spatial Coverage', uri: 'coverage' },
		{ label: 'Actors', uri: 'actors' },
		{ label: 'Relations and History', uri: 'relations' },
		{ label: 'Files', uri: 'files' },
		{ label: 'Extra', uri: 'extra' },
	],
	//'': { 'tab': 'description' },
	'': { 'tab': 'extra', 'order': ["title", "description", "language"] },
	//'': { 'tab': 'extra' },
	'#/definitions/langString': {
		'widget': 'i18n-string',
		'placeholder': "text",
		//'label': "multilingual string",
		//'description': "multilingual string",
		'help': "An item possibly defined in multiple languages.",
	},
	'#/definitions/Person': {
		'order': ["name", "email", "telephone", "identifier"],
	},
	'#/definitions/Organization': {
		'title': "Organisational hierarchy",
		'description': "Hierarchical structure of organisation. Here you can provide an organisation or company's information. You need to provide at least one name, but if desired, you can provide multiple organisational divisions for faculty or department.",
		'widget': 'SelfReferentialObject',
		'props': {
			'refField': "is_part_of",
			'levels': ["organisation", "faculty or division", "department or unit"],
		},
		'order': ["name", "email", "telephone", "identifier"],
	},
	'#/definitions/Document': {
		'visible': false,
	},
	'/properties/title': {
		'tab': 'description',
		'label': "Title",
		'title': "Name of the dataset",
		'description': "Dataset must have a name, i.e. title. There can be only one name, but it can have translations. Please give the language of the name (and its translations).",
		'placeholder': "title",
		'widget': 'i18n-string',
		'props': {
			'isTitle': true,
		},
	},
	'/properties/keyword': {
		'tab': 'description',
		'title': "Keywords",
		'description': "Give free keywords that characterize the dataset. Below, there is an other field for controlled subject headings.",
		'placeholder': "keywords",
		'widget': "schema-inline-array",
	},
	'/properties/language': {
		'tab': 'description',
		'title': "Language",
		'description': "Language or languages used in the data contents.",
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "language",
			'typeahead': true,
			'tags': false,
			'async': true,
			'count': 20,
			'labelNameInSchema': 'title'
		},
		'placeholder': "– choose language –",
	},
	'/properties/description': {
		'tab': 'description',
		'title': "Description",
		'placeholder': "description",
		'widget': 'i18n-textarea',
		'props': {
			'large': true,
		},
		'description': "A characterization of the dataset that lucidly describes the dataset. Add new field for each language version. Please define the language used in each case.",
	},
	'/properties/bibliographic_citation': {
		'tab': 'extra',
		'title': "Recommended Bibliographic Citation",
		'description': "Your preferred way to cite the dataset in publications, etc.",
	},
	'/properties/theme': {
		'tab': 'description',
		'title': "Subject heading",
		'description': "Choose subject headings from the General Finnish Ontology (YSO). It also has English and Swedish translations of the terms.",
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "keyword",
			'optgroups': false,
			'typeahead': true,
			'tags': false,
			'async': true,
			'count': 100,
			'grouped': false,
			'showLang': true
		}
	},
	'/properties/field_of_science': {
		'tab': 'description',
		'label': "Field of science",
		'title': "Field of Science",
		'description': "Field of science in the classification of the Ministry of Education and Culture.",
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "field_of_science",
			'optgroups': true,
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': true,
		}
	},


	'/properties/temporal': {
		'tab': 'coverage',
		'title': "Temporal coverage",
		'description': "Time span that is covered by the dataset, e.g. period of observations.",
	},
	'/properties/temporal/*': {
		'widget': 'date-range'
	},
	'/properties/spatial': {
		'tab': 'coverage',
		'title': "Spatial coverage",
		'description': "Area covered by the dataset, e.g. places of observations.",
	},
	'/properties/spatial/*/properties/place_uri': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "location",
			'typeahead': true,
			'tags': false,
			'async': true,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose location –",
		'label': "location",
		'description': "This is some fancy optional description for the location field",
		'help': "This is the optional help text for the location field",
	},

	// "producer project"
	'/properties/is_output_of': {
		'tab': 'actors',
		'title': "Producer Project",
		'description': "Project in which the dataset was created",
	},
	'/properties/is_output_of/*/properties/funder_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "funder_type",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose funder type –",
		'label': "funder type",
		'description': "This is some fancy optional description for the funder field",
		'help': "This is the optional help text for the funder field",
	},
	'/properties/creator': {
		'tab': 'actors',
		'title': "Creator of the dataset",
		'description': "The principal researcher or researchers involved in producing the data.",
	},
	'/properties/creator/*/oneOf/*/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	'/properties/creator/*/oneOf/*/properties/member_of/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	'/properties/creator/*/oneOf/*/properties/contributor_role': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_role",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor role –",
		'label': "contributor role",
		'description': "This is some fancy optional description for the contributor role field",
		'help': "This is the optional help text for the contributor role field",
	},
	// missing: distributor
	'/properties/contributor': {
		'tab': 'actors',
		'title': "Contributor",
		'description': "The organization or person that has participated in collecting, managing, or distributing of the dataset, or that has otherwise contributed to its development.",
	},
	'/properties/contributor/*/oneOf/*/properties/contributor_role': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_role",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor role –",
		'label': "contributor role",
		'description': "This is some fancy optional description for the contributor role field",
		'help': "This is the optional help text for the contributor role field",
	},
	'/properties/contributor/*/oneOf/*/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	'/properties/contributor/*/oneOf/*/properties/member_of/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	'/properties/curator': {
		'tab': 'actors',
		'title': "Curator",
		'description': "Person tasked with reviewing, enhancing, cleaning, and standardizing metadata and the associated data.",
	},
	'/properties/curator/*/oneOf/*/properties/contributor_role': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_role",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor role –",
		'label': "contributor role",
		'description': "This is some fancy optional description for the contributor role field",
		'help': "This is the optional help text for the contributor role field",
	},
	'/properties/curator/*/oneOf/*/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	'/properties/curator/*/oneOf/*/properties/member_of/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	// rights holder, also owner
	'/properties/rights_holder': {
		'tab': 'actors',
		'title': "Rights holder",
		'description': "A person or an organization that may edit, modify, share and restrict access to the dataset. The owner may also share or surrender these privileges to others.",
	},
	'/properties/rights_holder/*/oneOf/*/properties/contributor_role': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_role",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor role –",
		'label': "contributor role",
		'description': "This is some fancy optional description for the contributor role field",
		'help': "This is the optional help text for the contributor role field",
	},
	'/properties/rights_holder/*/oneOf/*/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	'/properties/rights_holder/*/oneOf/*/properties/member_of/properties/contributor_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "contributor_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose contributor type –",
		'label': "contributor type",
		'description': "This is some fancy optional description for the contributor type field",
		'help': "This is the optional help text for the contributor type field",
	},
	'/properties/relation': {
		'tab': 'relations',
		'title': "Reference to a related resource",
		'description': "Another dataset, publication, infrastructure and so on, related to this dataset.",
	},
	'/properties/relation/*/properties/relation_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "relation_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose relation type –",
		'label': "relation type",
		'description': "This is some fancy optional description for the relation type field",
		'help': "This is the optional help text for the relation type field",
	},
	'/properties/relation/*/properties/entity/properties/type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "resource_type",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose entity relation type –",
		'label': "entity relation type",
		'description': "This is some fancy optional description for the entity relation type field",
		'help': "This is the optional help text for the entity relation type field",
	},
	//path:"/properties/relation/0/properties/entity/properties/type/properties/identifier"

	// was Life cycle event
	'/properties/provenance': {
		'tab': 'relations',
		'title': "Provenance",
		'description': "An action or event that the dataset was the subject of.",
	},
	'/properties/provenance/*/properties/spatial/properties/place_uri': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "location",
			'typeahead': true,
			'tags': false,
			'async': true,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose location –",
		'label': "location",
		'description': "This is some fancy optional description for the location field",
		'help': "This is the optional help text for the location field",
	},
	'/properties/provenance/*/properties/lifecycle_event': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "lifecycle_event",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose type –",
		'title': "lifecycle event type",
		'description': "This is some fancy optional description for the type field",
		'help': "This is the optional help text for the type field",
	},
	'/properties/provenance/*/properties/preservation_event': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "preservation_event",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose type –",
		'title': "preservation event type",
		'description': "This is some fancy optional description for the type field",
		'help': "This is the optional help text for the type field",
	},
	'/properties/provenance/*/properties/event_outcome': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "event_outcome",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose type –",
		'title': "Event outcome",
		'description': "This is some fancy optional description for the event outcome field",
		'help': "This is the optional help text for the event outcome field",
	},
	'/properties/provenance/*/properties/used_entity/*/properties/type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "resource_type",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose type –",
		'title': "Resource type",
		'description': "This is some fancy optional description for the resource type field",
		'help': "This is the optional help text for the resource type field",
	},
	'/properties/provenance/*/properties/temporal': {
		'widget': 'date-range',
	},
	'/properties/files': {
		'tab': 'files',
		'widget': 'browser',
	},
	'/properties/directories': {
		'tab': 'notab',
	},
	'/properties/remote_resources': {
		'tab': 'notab',
	},
	'/properties/access_rights': {
		'tab': 'extra',
		'title': "Access rights",
		'description': "*** description for access rights goes here ***"
	},
	'/properties/access_rights/properties/access_type': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "access_type",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose access type –",
		'title': "access type",
		'description': "This is some fancy optional description for the access type field",
		'help': "This is the optional help text for the access type field",
	},
	'/properties/access_rights/properties/available': {
		'widget': 'date',
	},
	'/properties/access_rights/properties/restriction_grounds': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "restriction_grounds",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose restriction grounds –",
		'title': "restriction grounds",
		'description': "This is some fancy optional description for the restriction grounds field",
		'help': "This is the optional help text for the restriction grounds field",
	},
	'/properties/access_rights/properties/license': {
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "license",
			'typeahead': false,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
			'labelNameInSchema': 'title'
		},
		'placeholder': "– choose license –",
		'title': "license",
		'description': "This is some fancy optional description for the license field",
		'help': "This is the optional help text for the license field",
	},
	'/properties/publisher': {
		'tab': 'extra',
		'title': "Publisher",
		'description': "*** description for publisher goes here ***",
	},
	'/properties/issued': {
		'tab': 'extra',
		'title': "Issued",
		'description': "*** description for issued goes here ***",
		'widget': 'date'
	},
	'/properties/modified': {
		'tab': 'extra',
		'title': "modified",
		'description': "*** description for modified goes here ***",
		'widget': 'date'
	},
	'/properties/infrastructure': {
		'tab': 'extra',
		'widget': 'reference-data',
		'props': {
			'esIndex': "reference_data",
			'esDoctype': "research_infra",
			'typeahead': true,
			'tags': false,
			'async': false,
			'count': 100,
			'grouped': false,
		},
		'placeholder': "– choose infrastructure –",
		'title': "infrastructure",
		'description': "This is some fancy optional description for the intrastructure field",
		'help': "This is the optional help text for the infrastructure field",
	},
	'/properties/metadata_version_identifier': {
		'tab': 'extra',
		'title': "Metadata version identifier",
		'description': "*** description for metadata version identifier goes here ***",
	},
	'/properties/preferred_identifier': {
		'tab': 'extra',
		'title': "Preferred identifier",
		'description': "*** description for preferred identifier goes here ***",
	},
	'/properties/other_identifier': {
		'tab': 'extra',
		'title': "Other identifier",
		'description': "*** description for other identifier goes here ***",
	},
	'/properties/total_ida_byte_size': {
		'tab': 'extra',
		'title': "Total ida byte size",
		'description': "*** description for total ida byte size goes here ***",
	},
	'/properties/total_remote_resources_byte_size': {
		'tab': 'extra',
		'title': "Total remote resources byte size",
		'description': "*** description for total remote resources byte size goes here ***",
	},
	'/properties/value': {
		'tab': 'extra',
		'label': "Quality",
		'description': "Metadata quality value calculated in some manner.",
	},
	'/properties/version_info': {
		'tab': 'extra',
		'title': "Version info",
		'description': "*** description for version info goes here ***",
	},
	'/properties/version_notes': {
		'tab': 'extra',
		'title': "Version notes",
		'description': "*** description for version notes goes here ***",
	},
}
