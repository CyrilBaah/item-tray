# Create EKS cluster and nodes
```sh
eksctl create cluster --nodegroup-name ng1 --region eu-west-1 --node-type t2.medium --nodes 1
```

# Check cluster update
```sh
aws eks update-kubeconfig --region eu-west-1 --name eks01 
```

# Check status of cluster
```sh
aws eks --region eu-west-1 describe-cluster --name eks01  --query cluster.status
```

# Delete cluster
```sh
eksctl delete cluster --name=<CLUSTER_NAME> --region=eu-west-1
```

## Other Commands

# Connect to DB
```sh
kubectl run -i --tty --rm psql-client --image=postgres --restart=Never -- psql -h postgres -U myuser -d mydatabase
```

# Server DB
```sh
kubectl port-forward svc/postgres 5432:5432
```

# Coonect
```sh
psql -h localhost -U myuser -d mydatabase
```

kubectl create secret generic datadog-secret --from-literal api-key=cf01e4df2da6756e701c11dae4cebb17 --from-literal app-key=10af1674d99860a89d4bcd847a6b8f8b8a7b0750

az aks get-credentials --name "aksdemo" --resource-group "RG1"

psql -h postresdb.c520ooaic8e0.eu-west-1.rds.amazonaws.com -d postgres -U postgres

CREATE USER datadog WITH password 'password';

echo -n 'bX3bH9LDtFDqxpkY48Df' | base64 -d
echo -n 'bX3bH9LDtFDqxpkY48Df' | base64


kubectl exec -it postgres-74d79755d9-wjw6c -- psql -U postgres -d postgres

kubectl exec -it postgres-77b9699b65-2bwfw -- psql -U postgres -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
kubectl exec -it postgres-dd9d647d8-rl476 -- psql -U postgres -d postgres -c "SELECT * FROM pg_stat_statements LIMIT 1;"

kubectl exec -it postgres-5cfcfd6cff-7drpt -- psql -U postgres -d postgres -c "SHOW shared_preload_libraries;"
kubectl exec -it postgres-5cfcfd6cff-7drpt -- psql -U postgres -d postgres -c "SELECT * FROM pg_stat_statements LIMIT 1;"

