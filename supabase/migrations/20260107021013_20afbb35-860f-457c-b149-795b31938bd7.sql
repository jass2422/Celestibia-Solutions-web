-- Grant admin role to almuminlabs@gmail.com (user_id resolved from auth.users)
insert into public.user_roles (user_id, role)
select '451d650e-b4d0-4817-b413-da92fe5f0aff'::uuid, 'admin'::public.app_role
where not exists (
  select 1 from public.user_roles
  where user_id = '451d650e-b4d0-4817-b413-da92fe5f0aff'::uuid
    and role = 'admin'::public.app_role
);
