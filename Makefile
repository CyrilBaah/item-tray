# Define variables
IMAGE_NAME := item-tray
CONTAINER_NAME := item-tray
PORT := 4000
REGISTRY_NAME := cyrilbaah

# Build Docker image
build:
	docker build -t ${REGISTRY_NAME}/$(IMAGE_NAME) .

push_image:
	docker push ${REGISTRY_NAME}/$(IMAGE_NAME):latest

# Run Docker container in detached mode
run:
	docker run -d -p $(PORT):$(PORT) --name $(CONTAINER_NAME) ${REGISTRY_NAME}/$(IMAGE_NAME)

# Stop Docker container
stop:
	docker stop $(CONTAINER_NAME)


# Remove Docker container
remove:
	docker rm $(CONTAINER_NAME)

# Remove Docker image
remove-image:
	docker rmi $(IMAGE_NAME)

# View running containers
ps:
	docker ps

# View all containers (including stopped ones)
ps-all:
	docker ps -a

# View Docker images
images:
	docker images