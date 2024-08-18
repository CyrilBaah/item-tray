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