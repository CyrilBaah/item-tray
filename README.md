## Item Tray
Item Tray is a simple item management application built with Node.js framework. This API allows you to manage a list of items. You can create, retrieve, update, and delete items using various HTTP methods.

## Features
- Create Items: Add new items with titles.
- List Items: View a list of all your items.
- Delete Items: Remove items from your item list.

## Getting Started
Follow the steps below to set up and run Item Tray on your local machine.

## Prerequisites
Before you begin, ensure you have the following dependencies installed on your system:

- [Node](https://nodejs.org/en "Node") | JavaScript runtime environment.
- [Npm](https://www.npmjs.com/ "Npm") | Node Package Manager.

## Installation
Clone the repository to your local machine

1. Clone the repository to your local machine:
```sh
git clone https://github.com/CyrilBaah/item-tray.git
cd item-tray
```
2. Install the project dependencies:
```sh
npm install
```

## Running the Application
Start the Item Tray application using the following command:
```sh
npm run start
```
The application will run on http://localhost:4000.


## Usage
1.To create a new item, send a POST request to http://localhost:4000/item with a JSON body containing the item title.

Example using cURL:
```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Item", "description": "Item description"}' http://localhost:4000/items
```

2.To list all items, send a GET request to http://localhost:4000/items.

Example using cURL:
```sh
curl http://localhost:4000/items
```

3.To update an item, send a UPDATE request to http://localhost:4000/items/:id, where :id is the ID of the item you want to update.

Example using cURL (replace <itemId> with the actual item ID):
```sh
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Item", "description": "Updated description"}' http://localhost:4000/items/<itemId>
```

4.To delete an item, send a DELETE request to http://localhost:4000/items/:id, where :id is the ID of the item you want to delete.

Example using cURL (replace <itemId> with the actual item ID):
```sh
curl -X DELETE http://localhost:4000/items/<itemId>
```

## Using Docker
Refer to the Makefile to already prepare commands | [Makefile](https://github.com/CyrilBaah/item-tray/blob/dev/Makefile)

## Implement Datadog APM (using the method of admission controller)
Guide
- [Injecting Libraries Locally](https://docs.datadoghq.com/tracing/trace_collection/library_injection_local/?tab=kubernetes "DataDog") 
- [Datadog Admission Controller](https://docs.datadoghq.com/containers/cluster_agent/admission_controller/?tab=datadogoperator "DataDog") 



## Set Up [Ingress](https://kind.sigs.k8s.io/docs/user/ingress/#using-ingress)

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

2. Create Admission Webhook
```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

3. Wait for process to be ready
```sh
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s
  ```

4. Verify Ingress resource
```sh
kubectl get ingress
```

5. Set DNS Resolutions locally
```sh
sudo nano /etc/hosts
```

6. Update the file with dns of you choice. ie. [item.local](http://item.local)
```sh
127.0.0.1 item.local
```