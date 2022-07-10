type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly username?: Scalars['String'] | null;
  readonly username_not?: Scalars['String'] | null;
  readonly username_contains?: Scalars['String'] | null;
  readonly username_not_contains?: Scalars['String'] | null;
  readonly username_starts_with?: Scalars['String'] | null;
  readonly username_not_starts_with?: Scalars['String'] | null;
  readonly username_ends_with?: Scalars['String'] | null;
  readonly username_not_ends_with?: Scalars['String'] | null;
  readonly username_i?: Scalars['String'] | null;
  readonly username_not_i?: Scalars['String'] | null;
  readonly username_contains_i?: Scalars['String'] | null;
  readonly username_not_contains_i?: Scalars['String'] | null;
  readonly username_starts_with_i?: Scalars['String'] | null;
  readonly username_not_starts_with_i?: Scalars['String'] | null;
  readonly username_ends_with_i?: Scalars['String'] | null;
  readonly username_not_ends_with_i?: Scalars['String'] | null;
  readonly username_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly username_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'username_ASC'
  | 'username_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly username?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly username?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type RestaurantWhereInput = {
  readonly AND?: ReadonlyArray<RestaurantWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RestaurantWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdBy?: Scalars['String'] | null;
  readonly createdBy_not?: Scalars['String'] | null;
  readonly createdBy_contains?: Scalars['String'] | null;
  readonly createdBy_not_contains?: Scalars['String'] | null;
  readonly createdBy_starts_with?: Scalars['String'] | null;
  readonly createdBy_not_starts_with?: Scalars['String'] | null;
  readonly createdBy_ends_with?: Scalars['String'] | null;
  readonly createdBy_not_ends_with?: Scalars['String'] | null;
  readonly createdBy_i?: Scalars['String'] | null;
  readonly createdBy_not_i?: Scalars['String'] | null;
  readonly createdBy_contains_i?: Scalars['String'] | null;
  readonly createdBy_not_contains_i?: Scalars['String'] | null;
  readonly createdBy_starts_with_i?: Scalars['String'] | null;
  readonly createdBy_not_starts_with_i?: Scalars['String'] | null;
  readonly createdBy_ends_with_i?: Scalars['String'] | null;
  readonly createdBy_not_ends_with_i?: Scalars['String'] | null;
  readonly createdBy_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdBy_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly location?: Scalars['String'] | null;
  readonly location_not?: Scalars['String'] | null;
  readonly location_contains?: Scalars['String'] | null;
  readonly location_not_contains?: Scalars['String'] | null;
  readonly location_starts_with?: Scalars['String'] | null;
  readonly location_not_starts_with?: Scalars['String'] | null;
  readonly location_ends_with?: Scalars['String'] | null;
  readonly location_not_ends_with?: Scalars['String'] | null;
  readonly location_i?: Scalars['String'] | null;
  readonly location_not_i?: Scalars['String'] | null;
  readonly location_contains_i?: Scalars['String'] | null;
  readonly location_not_contains_i?: Scalars['String'] | null;
  readonly location_starts_with_i?: Scalars['String'] | null;
  readonly location_not_starts_with_i?: Scalars['String'] | null;
  readonly location_ends_with_i?: Scalars['String'] | null;
  readonly location_not_ends_with_i?: Scalars['String'] | null;
  readonly location_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly location_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly createdAt_not?: Scalars['String'] | null;
  readonly createdAt_lt?: Scalars['String'] | null;
  readonly createdAt_lte?: Scalars['String'] | null;
  readonly createdAt_gt?: Scalars['String'] | null;
  readonly createdAt_gte?: Scalars['String'] | null;
  readonly createdAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly createdAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly updatedAt?: Scalars['String'] | null;
  readonly updatedAt_not?: Scalars['String'] | null;
  readonly updatedAt_lt?: Scalars['String'] | null;
  readonly updatedAt_lte?: Scalars['String'] | null;
  readonly updatedAt_gt?: Scalars['String'] | null;
  readonly updatedAt_gte?: Scalars['String'] | null;
  readonly updatedAt_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly updatedAt_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly desc?: Scalars['String'] | null;
  readonly desc_not?: Scalars['String'] | null;
  readonly desc_contains?: Scalars['String'] | null;
  readonly desc_not_contains?: Scalars['String'] | null;
  readonly desc_starts_with?: Scalars['String'] | null;
  readonly desc_not_starts_with?: Scalars['String'] | null;
  readonly desc_ends_with?: Scalars['String'] | null;
  readonly desc_not_ends_with?: Scalars['String'] | null;
  readonly desc_i?: Scalars['String'] | null;
  readonly desc_not_i?: Scalars['String'] | null;
  readonly desc_contains_i?: Scalars['String'] | null;
  readonly desc_not_contains_i?: Scalars['String'] | null;
  readonly desc_starts_with_i?: Scalars['String'] | null;
  readonly desc_not_starts_with_i?: Scalars['String'] | null;
  readonly desc_ends_with_i?: Scalars['String'] | null;
  readonly desc_not_ends_with_i?: Scalars['String'] | null;
  readonly desc_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly desc_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type RestaurantWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRestaurantsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'createdBy_ASC'
  | 'createdBy_DESC'
  | 'location_ASC'
  | 'location_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'desc_ASC'
  | 'desc_DESC';

export type RestaurantUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly createdBy?: Scalars['String'] | null;
  readonly location?: Scalars['String'] | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly updatedAt?: Scalars['String'] | null;
  readonly desc?: Scalars['String'] | null;
};

export type RestaurantsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RestaurantUpdateInput | null;
};

export type RestaurantCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly createdBy?: Scalars['String'] | null;
  readonly location?: Scalars['String'] | null;
  readonly createdAt?: Scalars['String'] | null;
  readonly updatedAt?: Scalars['String'] | null;
  readonly desc?: Scalars['String'] | null;
};

export type RestaurantsCreateInput = {
  readonly data?: RestaurantCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly username?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'username'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly username?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type RestaurantListTypeInfo = {
  key: 'Restaurant';
  fields:
    | 'id'
    | 'name'
    | 'createdBy'
    | 'location'
    | 'createdAt'
    | 'updatedAt'
    | 'desc';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly createdBy?: string | null;
    readonly location?: string | null;
    readonly createdAt?: Date | null;
    readonly updatedAt?: Date | null;
    readonly desc?: string | null;
  };
  inputs: {
    where: RestaurantWhereInput;
    create: RestaurantCreateInput;
    update: RestaurantUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RestaurantWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRestaurantsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RestaurantListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RestaurantListTypeInfo,
    RestaurantListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RestaurantListTypeInfo,
  RestaurantListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Restaurant: RestaurantListTypeInfo;
};
