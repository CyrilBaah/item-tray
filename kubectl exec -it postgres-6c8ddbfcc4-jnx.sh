kubectl exec -it postgres-77b9699b65-955bk -- psql -U postgres


kubectl exec -it postgres-77b9699b65-955bk -- psql -U postgres
psql -h localhost -U datadog postgres -A \
  -c "select * from pg_stat_database limit 1;" \
  && echo -e "\e[0;32mPostgres connection - OK\e[0m" \
  || echo -e "\e[0;31mCannot connect to Postgres\e[0m"
psql -h localhost -U datadog postgres -A \
  -c "select * from pg_stat_activity limit 1;" \
  && echo -e "\e[0;32mPostgres pg_stat_activity read OK\e[0m" \
  || echo -e "\e[0;31mCannot read from pg_stat_activity\e[0m"
psql -h localhost -U datadog postgres -A \
  -c "select * from pg_stat_statements limit 1;" \
  && echo -e "\e[0;32mPostgres pg_stat_statements read OK\e[0m" \
  || echo -e "\e[0;31mCannot read from pg_stat_statements\e[0m"


  CREATE USER datadog WITH password 'datadog';

cat <<EOL > /etc/datadog-agent/conf.d/postgres.d/conf.yaml
init_config:

instances:
  - dbm: true
    host: postgres
    port: 5432
    username: datadog
    password: 'datadog'
    dbname: postgres
EOL

```sh
kubectl cp /Users/cyril/Desktop/workspace/apps/item-tray/ops/db/conf.yaml datadog-agent-kdhsb:/etc/datadog-agent/conf.d/postgres.d/conf.yaml
```

kubectl exec -it datadog-agent-kdhsb -- psql -h postgres -U datadog -d postgres -c "SELECT * FROM pg_stat_database LIMIT 1;"
